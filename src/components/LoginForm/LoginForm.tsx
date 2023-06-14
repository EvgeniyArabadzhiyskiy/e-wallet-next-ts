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
import { dayTheme } from "@/src/styles/theme/theme";
import { Box } from "../Box/Box";
import { FormikHelpers, FormikProps } from "formik";
import { ILoginValues } from "@/src/types/loginValues";
import Link from "next/link";
import Spinner from "../Spinner/Spinner";
import {Title} from "../Title/Title.styled";

// const login = async (credentials: any) => {
//   const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
//   const USER_LOGIN = "/users/login";

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(credentials),
//   };

//   const resFetch = await fetch(`${BASE_URL}${USER_LOGIN}`, options);
//   const user = await resFetch.json();
//   console.log("login  user:", user);

//   // const { data: user } = await axios.post(
//   //   `${BASE_URL}${USER_LOGIN}`,
//   //   credentials
//   // );

//   return user;
// };




export default function LoginForm () {
  const isScale = useScaleForm();
  const [isLoading, setIsLoading] = useState(false);

  // const session = useSession()
  // console.log("LoginForm  session:", session.status);
  // const isLoading = session.status === "loading"
  // console.log("LoginForm  isLoading:", isLoading);

  // if (session.status === "loading") {
  //   return <h1>Session loading ...</h1>;
  // }
  // console.log("LoginPage session:", session.data?.user.token);

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginValues, { resetForm }: FormikHelpers<ILoginValues>) => {
    
    setIsLoading(true);

    try {
      const user = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      });
  
      // console.log('handleSubmit user:', user);
  
      resetForm({ values: { email: '', password: '' } });
    } catch (error) {
      // Обработка ошибок
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormWrap $isScale={isScale}>
      {isLoading && <Spinner />}
      <Title as='h2' mb={5} color='expense' fontSize={["ml"]} textAlign='center' >Login Page</Title>
      <Logo />

      <FormContainer 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema.login}
        render={(formik: FormikProps<ILoginValues>) => <LoginFormFields formik={formik} />}
      />

    </FormWrap>
  );
}




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
