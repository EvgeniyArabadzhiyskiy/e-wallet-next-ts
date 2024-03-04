"use client";

import { useState } from "react";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useScaleForm } from "@/src/hooks/useScaleForm";

import { Box } from "../Box/Box";
import { TRegistrationValues, registrationValidator } from "@/src/helpers/formValidation";
import { FormWrap } from "../LoginForm/LoginForm.styled";

import Logo from "../Logo";
import AuthError from "../Errors/AuthError";
import FormContainer from "../FormContainer";
import RegisterFormFields from "../RegisterFormFields";
import { trpc } from "@/src/trpc/client";


export default function RegistrationForm() {
  const router = useRouter();

  const isScale = useScaleForm();
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues: TRegistrationValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
  };

  const { mutate: signUp, isLoading, error, isError, reset } = trpc.authRouter.signUp.useMutation({
    onSuccess: () => {
      router.push('/login');
    }
  });

  const handleSubmit = async (
    { email, password, firstName, confirmPassword }: TRegistrationValues,
    { resetForm }: FormikHelpers<TRegistrationValues>
  ) => {
    
    try {
      signUp({ email, password, firstName, confirmPassword })

    } catch (error) {
      const message = (error as Error).message

      switch (message) {
        case "409":
          setErrorMessage("Email in use");
          return;
        case "404":
          setErrorMessage("Route is Not Found");
          return;
        default:
          setErrorMessage("Server Error");
      } 
    } 
    // resetForm();
  };

  return (
    <FormWrap $isScale={isScale}>
      <Box mb={60}>
        <Logo />
      </Box>

      {error
        ? <AuthError
            href="/login" 
            text="Login" 
            errorMessage={error.message} 
            resetError={reset} 
          />
        : <FormContainer<TRegistrationValues>
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={registrationValidator}
            render={(formik) => <RegisterFormFields formik={formik} loading={isLoading} />}
          />
      }  
    </FormWrap>
  );
}

