"use client";

import { useState } from "react";
import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useScaleForm } from "@/src/hooks/useScaleForm";

import { Box } from "../Box/Box";
import { FormWrap } from "./LoginForm.styled";
import { ILoginValues } from "@/src/types/loginValues";
import { loginSchema } from "@/src/helpers/formValidation";

import Logo from "../Logo";
import AuthError from "../Errors/AuthError";
import FormContainer from "../FormContainer";
import LoginFormFields from "../LoginFormFields";


export default function LoginForm () {
  const router = useRouter();

  const isScale = useScaleForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginValues,
    { resetForm }: FormikHelpers<ILoginValues>
    ) => {

    setIsLoading(true);
    setErrorMessage("");

    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
      // redirect: true,
      // callbackUrl: '/home/transactions'
    });

    resetForm({ values: { email: '', password: '' } });
    
    if (response?.error) {
      // setIsLoading(false);
      setErrorMessage(response.error)
      return
    }
    
    setIsLoading(false);
    router.push('/home/transactions');
  };

  return (
    <FormWrap $isScale={isScale}>
      <Box mb={60}>
        <Logo />
      </Box>

      {errorMessage 
        ? <AuthError 
            href="/register" 
            text="Registration" 
            errorMessage={errorMessage} 
            resetError={setErrorMessage} 
          />
        : <FormContainer<ILoginValues>
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={loginSchema}
            render={(formik) => <LoginFormFields formik={formik} loading={isLoading} />}
          />
      }

    </FormWrap>
  );
}
