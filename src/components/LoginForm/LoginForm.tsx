"use client";

import Link from "next/link";
import { useState } from "react";
import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useScaleForm } from "@/src/hooks/useScaleForm";

import Logo from "../Logo/Logo";
import FormContainer from "../FormContainer/FormContainer";
import LoginFormFields from "../LoginFormFields/LoginFormFields";

import { FormWrap } from "./LoginForm.styled";
import { ILoginValues } from "@/src/types/loginValues";
import { loginSchema } from "@/src/helpers/formValidation";
import { Box } from "../Box/Box";
import AuthError from "../Errors/AuthError";


export default function LoginForm () {
  const router = useRouter()

  // const searchParams = useSearchParams()
  // const errorMessage = searchParams.get('error')

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

    // try {
      const response = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
        // redirect: true,
        // callbackUrl: '/home/transactions'
      });
      console.log("LoginForm  user:", response);

      resetForm({ values: { email: '', password: '' } });
      
      if (response?.error) {
        setIsLoading(false);
        setErrorMessage(response.error)
        return
      }
      
      console.log("FINAL");
      router.push('/home/transactions')
    
    // } catch (error) {
    //   console.log("LoginForm  error:", error);
      
    // } finally {
    //   setIsLoading(false);
    // }
  };

  // if (isLoading) {
  //   return  <h1 style={{color: "green", fontSize: 56}}>Loading...</h1>
  // }
  
  return (
    <FormWrap $isScale={isScale}>
      {/* {isLoading && <h1 style={{color: "white"}}>Loading...</h1>} */}
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
