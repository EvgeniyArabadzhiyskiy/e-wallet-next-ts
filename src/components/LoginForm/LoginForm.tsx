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
import { useGoogleAuth } from "@/src/hooks/useGoogleAuth";
import { Box } from "../Box/Box";
import LoginError from "../Errors/LoginError/LoginError";
import { useUser } from "@/src/hooks/useUser";


export default function LoginForm () {
  const userData = useUser()
  // console.log("LoginForm  userData:", userData.status === 'loading');

  const router = useRouter()

  const searchParams = useSearchParams()
  const errorMessage = searchParams.get('error')
  // console.log("errorMessage", errorMessage);

  const isScale = useScaleForm();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginValues,
    { resetForm }: FormikHelpers<ILoginValues>
    ) => {

    setIsLoading(true);

    try {
      const user =  signIn('credentials', {
        email: values.email,
        password: values.password,
        // redirect: false,
        // redirect: true,
        // callbackUrl: '/home/transactions'
      });

      console.log("FINAL");
      // router.push('/home')
    
      resetForm({ values: { email: '', password: '' } });
    } catch (error) {
      
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return  <h1 style={{color: "tomato", fontSize: 56}}>Loading...</h1>
  }
  
  return (
    <FormWrap $isScale={isScale}>
      {/* {isLoading && <h1 style={{color: "white"}}>Loading...</h1>} */}
      <Box mb={60}>
        <Logo />
      </Box>

      {errorMessage 
        ? <LoginError errorMessage={errorMessage} />
        : <FormContainer<ILoginValues>
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={loginSchema}
            render={(formik) => <LoginFormFields formik={formik} />}
          />
      }

    </FormWrap>
  );
}
