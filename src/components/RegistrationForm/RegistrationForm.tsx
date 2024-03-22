"use client";

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

  const handleSubmit = (
    { email, password, firstName, confirmPassword }: TRegistrationValues) => {
    signUp({ email, password, firstName, confirmPassword })

  };

  return (
    <FormWrap $isScale={isScale}>
      <Box mb={60}>
        <Logo />
      </Box>

      {isError
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

