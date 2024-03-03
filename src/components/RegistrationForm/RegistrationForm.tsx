"use client";

import { useState } from "react";
import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useScaleForm } from "@/src/hooks/useScaleForm";
import { ICredentials, IRegisterValues } from "@/src/types/registerValues";

import { Box } from "../Box/Box";
import { register } from "@/src/apiWallet/user";
import { registerSchema } from "@/src/helpers/formValidation";
import { FormWrap } from "../LoginForm/LoginForm.styled";

import Logo from "../Logo";
import AuthError from "../Errors/AuthError";
import FormContainer from "../FormContainer";
import RegisterFormFields from "../RegisterFormFields";
import { trpc } from "@/src/trpc/client";


export default function RegistrationForm() {
  const router = useRouter();

  const isScale = useScaleForm();
  // const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues: IRegisterValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };

  const { mutate: signUp, isLoading } = trpc.authRouter.signUp.useMutation({
    onSuccess: () => {
      router.push('/login');
    }
  });

  const handleSubmit = async (
    { email, password, name: firstName }: IRegisterValues,
    { resetForm }: FormikHelpers<IRegisterValues>
  ) => {
    const userCredentials: ICredentials = { email, password, firstName };

    // setIsLoading(true);

    try {
      // const newUser = await register(userCredentials);
      signUp(userCredentials)

      // const response = await signIn('credentials', {
      //   email: email,
      //   password: password,
      //   redirect: false,
      //   // redirect: true,
      //   // callbackUrl: '/home/transactions'
      // });

      // router.push('/home/transactions');
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
    } finally {
      // setIsLoading(false);
    }
  
    resetForm();
  };

  return (
    <FormWrap $isScale={isScale}>
      <Box mb={60}>
        <Logo />
      </Box>

      {errorMessage 
        ? <AuthError
            href="/login" 
            text="Login" 
            errorMessage={errorMessage} 
            resetError={setErrorMessage} 
          />
        : <FormContainer<IRegisterValues>
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={registerSchema}
        render={(formik) => <RegisterFormFields formik={formik} loading={isLoading} />}
      />
      }  

      
    </FormWrap>
  );
}

