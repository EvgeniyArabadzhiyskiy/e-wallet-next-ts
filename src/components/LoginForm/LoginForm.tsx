"use client";

import { trpc } from "@/src/trpc/client";
import { useRouter } from "next/navigation";
import { useScaleForm } from "@/src/hooks/useScaleForm";

import { Box } from "../Box/Box";
import { FormWrap } from "./LoginForm.styled";
import { TLoginValues, loginValidator } from "@/src/helpers/formValidation";

import Logo from "../Logo";
import AuthError from "../Errors/AuthError";
import FormContainer from "../FormContainer";
import LoginFormFields from "../LoginFormFields";


export default function LoginForm () {
  const router = useRouter();
  const isScale = useScaleForm();
  
  const initialValues: TLoginValues = {
    email: "",
    password: "",
  };
  
  const { mutate: signIn, error, isError, isLoading, reset } = trpc.authRouter.signIn.useMutation({
    onSuccess: () => {
      router.push('/home/transactions');
    }
  });

  const handleSubmit = async (values: TLoginValues) => {
    signIn({
      email: values.email,
      password: values.password,
    })  
  };

  return (
    <FormWrap $isScale={isScale}>
      <Box mb={60}>
        <Logo />
      </Box>

      {isError 
        ? <AuthError 
            href="/register" 
            text="Registration" 
            errorMessage={error.message} 
            resetError={reset} 
          />
        : <FormContainer<TLoginValues>
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={loginValidator}
            render={(formik) => <LoginFormFields formik={formik} loading={isLoading} />}
          />
      }

    </FormWrap>
  );
}
