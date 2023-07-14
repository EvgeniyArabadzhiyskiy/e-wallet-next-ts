"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { FormWrap } from "./LoginForm.styled";
import { useScaleForm } from "@/src/hooks/useScaleForm";
import Logo from "../Logo/Logo";
import { setCookie } from "nookies";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LoginFormFields from "../LoginFormFields/LoginFormFields";
import FormContainer from "../FormContainer/FormContainer";
import schema from "@/src/helpers/formValidation";
import { Box } from "../Box/Box";
import { FormikHelpers, FormikProps } from "formik";
import { ILoginValues } from "@/src/types/loginValues";
import Link from "next/link";
import Spinner from "../Spinner/Spinner";
import { Title } from "../Title/Title.styled";
import { IRegisterValues } from "@/src/types/registerValues";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BASE_URL, USER_LOGIN } from "@/src/constants/apiPath";

const login = async (credentials: ILoginValues) => {
  // const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  // const USER_LOGIN = "/users/login";

  // const options = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(credentials),
  // };

  // const resFetch = await fetch(`${BASE_URL}${USER_LOGIN}`, options);
  // const user = await resFetch.json();
  // console.log("login  user:", user);

  try {
    const { data } = await axios.post(`${BASE_URL}${USER_LOGIN}`, credentials);
    return data;
    
  } catch (error) {
    throw error;
  }
};

//==============================================================================
export default function LoginForm () {
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
      const user = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: '/home'
      });

      resetForm({ values: { email: '', password: '' } });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormWrap $isScale={isScale}>
      {isLoading && <h1>Loading...</h1>}
      <Title as='h2' mb={5} color='expense' fontSize={["ml"]}  >Login Page</Title>
      <Logo />

      <FormContainer<ILoginValues>
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema.login}
        render={(formik) => <LoginFormFields formik={formik} />}
      />

    </FormWrap>
  );
}

//=====================================================================================
// export default function LoginForm() {
//   const router = useRouter();
//   const isScale = useScaleForm();

//   const initialValues: ILoginValues = {
//     email: "",
//     password: "",
//   };

//   const { mutate: signInUser, isLoading } = useMutation({
//     mutationFn: login,

//     onSuccess: (data) => {
//       // console.log("LoginForm  data:", data);
//       const { token, ...rest } = data;
//       // queryClient.setQueryData(["currentUser"], rest);

//       setCookie(null, "authToken", `${token}`, {
//         maxAge: 30 * 24 * 60 * 60,
//         path: "/",
//       });

//       router.push("/home");
//       // const ddd = queryClient.getQueryData(['currentUser'])
//       // console.log("LoginForm  ddd:", ddd);
//     },
//   });

//   const handleSubmit = async (
//     values: ILoginValues,
//     { resetForm }: FormikHelpers<ILoginValues>
//   ) => {
//     signInUser({ email: values.email, password: values.password });

//     resetForm({ values: { email: "", password: "" } });
//   };

//   return (
//     <FormWrap $isScale={isScale}>
//       {isLoading && <h1>Loading...</h1>}
//       <Title as="h2" mb={5} color="expense" fontSize={["ml"]}>
//         Login Page
//       </Title>
//       <Logo />

//       <FormContainer
//         onSubmit={handleSubmit}
//         initialValues={initialValues}
//         validationSchema={schema.login}
//         render={(formik: FormikProps<ILoginValues>) => (
//           <LoginFormFields formik={formik} />
//         )}
//       />
//     </FormWrap>
//   );
// }




//==============================================================================
// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const sss = await signIn("credentials", {
//       email: email,
//       password: password,
//       redirect: false,
//       // redirect: true,
//       // callbackUrl: "/about",
//     });
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "email":
//         setEmail(value);
//         return;

//       case "password":
//         setPassword(value);
//         return;

//       default:
//         return;
//     }
//   };

//   return (
//     < >
//       <form onSubmit={onSubmit}>
//         <input type="text" name="email" onChange={handleChange} />
//         <input type="password" name="password" onChange={handleChange} />
//         <button type="submit">Sign In</button>
//       </form>
//     </>
//   );
// }

// export default LoginForm;

//==============================================================================
// const mutation = useMutation({
//   mutationFn: login,

//   onSuccess: (data) => {
//     const { token, ...rest } = data;
//     queryClient.setQueryData(["currentUser"], rest);

//     setCookie(null, "authToken", `${token}`, {
//       maxAge: 30 * 24 * 60 * 60,
//       path: "/",
//     });
//     // const ddd = queryClient.getQueryData(['currentUser'])
//     // console.log("LoginForm  ddd:", ddd);
//   },
// });
