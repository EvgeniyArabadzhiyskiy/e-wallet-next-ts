"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FormikHelpers, FormikProps } from "formik";
import { useScaleForm } from "@/src/hooks/useScaleForm";
import { ICredentials, IRegisterValues } from "@/src/types/registerValues";

import Logo from "../Logo/Logo";
import Spinner from "../Spinner/Spinner";
import { Title } from "../Title/Title.styled";
import { FormWrap } from "../LoginForm/LoginForm.styled";
import FormContainer from "../FormContainer/FormContainer";
import RegisterFormFields from "../RegisterFormFields/RegisterFormFields";
import { useMutation } from "@tanstack/react-query";
import { USER_REGISTER } from "@/src/constants/apiPath";
import { BASE_URL } from "@/src/constants/apiPath";
import axios from "axios";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";
import { registerSchema } from "@/src/helpers/formValidation";
import { useRegisterUser } from "@/src/apiWallet";
import { register } from "@/src/apiWallet/user";

// const register = async (credentials: ICredentials) => {
//   // const options = {
//   //   method: "POST",
//   //   headers: { "Content-Type": "application/json" },
//   //   body: JSON.stringify(credentials),
//   // };
//   // const result = await fetch(`${BASE_URL}${USER_REGISTER}`, options);
//   // const user = await result.json();
//   // return user;

//   try {
//     const { data } = await axios.post(
//       `${BASE_URL}${USER_REGISTER}`,
//       credentials
//     );
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export default function RegistrationForm() {
  // const router = useRouter();
  const isScale = useScaleForm();

  // const { mutate: registerUser, isLoading } = useMutation({
  //   mutationFn: register,
  //   onSuccess: (data) => {
  //     const { token, ...rest } = data;

  //     setCookie(null, "authToken", `${token}`, {
  //       maxAge: 30 * 24 * 60 * 60,
  //       path: "/",
  //     });

  //     router.push("/home");
  //   },
  // });

  const { mutate: registerUser, isLoading } = useRegisterUser()

  const initialValues: IRegisterValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };

  const handleSubmit = async (
    { email, password, name: firstName }: IRegisterValues,
    { resetForm }: FormikHelpers<IRegisterValues>
  ) => {
    const userCredentials: ICredentials = { email, password, firstName };

    const resulrRegistration = await register(userCredentials)
    console.log("RegistrationForm  resulrRegistration:", resulrRegistration.user.email);

    const user = await signIn('credentials', {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: '/home/transactions'
    });

    // registerUser(userCredentials);

    resetForm();
  };

  return (
    <FormWrap $isScale={isScale}>
      {isLoading && <h1>Loading...</h1>}
      <Title
        as="h2"
        mb={5}
        color="expense"
        fontSize={["l"]}
        // textAlign="center"
      >
        Register Page
      </Title>
      <Logo />

      <FormContainer<IRegisterValues>
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={registerSchema}
        render={(formik) => <RegisterFormFields formik={formik} />}
      />
    </FormWrap>
  );
}

// export default function RegistrationForm() {
//   const isScale = useScaleForm();
//   const [isLoading, setIsLoading] = useState(false);

//   const initialValues: IRegisterValues = {
//     email: "",
//     password: "",
//     confirmPassword: "",
//     name: "",
//   };

//   const handleSubmit = async (
//     values: IRegisterValues,
//     { resetForm }: FormikHelpers<IRegisterValues>
//   ) => {
//     setIsLoading(true);

//     try {
//       const user = await signIn("credentials", {
//         email: values.email,
//         password: values.password,
//         confirmPassword: values.confirmPassword,
//         name: values.name,
//         redirect: false,
//       });

//       resetForm();
//     } catch (error) {
//       console.log("RegistrationForm  error:", error);
//       // Обработка ошибок
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <FormWrap $isScale={isScale}>
//       {isLoading && <Spinner />}
//       <Title as="h2" mb={5} color="expense" fontSize={["ml"]} textAlign="center">Register Page</Title>
//       <Logo />

//       <FormContainer
//         onSubmit={handleSubmit}
//         initialValues={initialValues}
//         validationSchema={schema.register}
//         render={(formik: FormikProps<IRegisterValues>) => <RegisterFormFields formik={formik} />}
//       />
//     </FormWrap>
//   );
// }
