"use client";

import { signIn, useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { FormWrap, Title } from "./LoginForm.styled";
import { useScaleForm } from "@/hooks/useScaleForm";
import Logo from "../Logo/Logo";
import { setCookie } from "nookies";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LoginFormFields from "../LoginFormFields/LoginFormFields";
import FormContainer from "../FormContainer/FormContainer";
import schema from "@/helpers/formValidation";
import { dayTheme } from "@/styles/theme/theme";
import { Box } from "../Box/Box";
import { FormikHelpers, FormikProps } from "formik";
import { ILoginValues } from "@/types/loginValues";

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




function LoginForm() {
  const isScale = useScaleForm();

  const session = useSession()
  // console.log("LoginPage session:", session.data?.user.token);

  const initialValues: ILoginValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginValues, { resetForm }: FormikHelpers<ILoginValues>) => {
    
    const sss = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    console.log("handleSubmit  sss:", sss);
    resetForm();

  };

  const handleClick = () => {
    console.log("hello");
    
  }

  return (
    <FormWrap $isScale={isScale}>
      <Logo />
      <Title as='h3' mb={5} color={dayTheme.colors.basicStat} >Test Title</Title>

      <Box as='h1' mt={5} color={dayTheme.colors.expense} >Test Title</Box>
      {/* <button type="button" onClick={handleClick} >Hello</button> */}

      <FormContainer 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema.login}
        render={(formik: FormikProps<ILoginValues>) => <LoginFormFields formik={formik} />}
      />

    </FormWrap>
  );
}

export default LoginForm;


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
