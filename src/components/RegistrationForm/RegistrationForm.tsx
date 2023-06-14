"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FormikHelpers, FormikProps } from "formik";
import { useScaleForm } from "@/src/hooks/useScaleForm";
import { IRegisterValues } from "@/src/types/registerValues";
import schema from "@/src/helpers/formValidation";

import Logo from "../Logo/Logo";
import Spinner from "../Spinner/Spinner";
import { Title } from "../Title/Title.styled";
import { FormWrap } from "../LoginForm/LoginForm.styled";
import FormContainer from "../FormContainer/FormContainer";
import RegisterFormFields from "../RegisterFormFields/RegisterFormFields";

export default function RegistrationForm() {
  const isScale = useScaleForm();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: IRegisterValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };

  const handleSubmit = async (
    values: IRegisterValues,
    { resetForm }: FormikHelpers<IRegisterValues>
  ) => {
    setIsLoading(true);

    try {
      const user = await signIn("credentials", {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        name: values.name,
        redirect: false,
      });

      resetForm();
    } catch (error) {
      console.log("RegistrationForm  error:", error);
      // Обработка ошибок
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormWrap $isScale={isScale}>
      {isLoading && <Spinner />}
      <Title as="h2" mb={5} color="expense" fontSize={["ml"]} textAlign="center">Register Page</Title>
      <Logo />

      <FormContainer
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema.register}
        render={(formik: FormikProps<IRegisterValues>) => (
          <RegisterFormFields formik={formik} />
        )}
      />
    </FormWrap>
  );
}
