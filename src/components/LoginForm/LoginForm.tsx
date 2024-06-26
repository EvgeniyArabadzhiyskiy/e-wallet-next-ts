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
import { toast } from "sonner";


export default function LoginForm () {
  const router = useRouter();
  const isScale = useScaleForm();
  
  const initialValues: TLoginValues = {
    email: "",
    password: "",
  };
  
  const { mutate: signIn, error, isError, isLoading, reset } = trpc.authRouter.signIn.useMutation({
    onSuccess: () => {
      toast.success("Signed in successfully");
      router.push('/home/transactions');
    }
  });

  const handleSubmit = (values: TLoginValues) => {
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
            render={(formik) => <LoginFormFields formik={formik} isLoading={isLoading} />}
          />
      }

    </FormWrap>
  );
}
