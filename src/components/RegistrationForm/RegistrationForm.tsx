"use client";

import { useState } from "react";
import { FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useScaleForm } from "@/src/hooks/useScaleForm";
import { ICredentials, IRegisterValues } from "@/src/types/registerValues";

import Logo from "../Logo/Logo";
import { Title } from "../Title/Title.styled";
import { FormWrap } from "../LoginForm/LoginForm.styled";
import FormContainer from "../FormContainer/FormContainer";
import RegisterFormFields from "../RegisterFormFields/RegisterFormFields";
import { registerSchema } from "@/src/helpers/formValidation";
import { register } from "@/src/apiWallet/user";
import { Box } from "../Box/Box";
import AuthError from "../Errors/AuthError";


export default function RegistrationForm() {
  const isScale = useScaleForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  // console.log("RegistrationForm  error:", errorMessage);

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

    setIsLoading(true);

    try {
      const newUser = await register(userCredentials)
      console.log("RegistrationForm  resulrRegistration:", newUser.user.email);

      const response = await signIn('credentials', {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: '/home/transactions'
      });
    } catch (error) {
      const message = (error as Error).message

      switch (message) {
        case "409":
          setErrorMessage("Email in use");
          return;
        case "404":
          setErrorMessage("Route is Not Found");
          return;
        default:
          setErrorMessage("Server Error");
      } 
    } finally {
      setIsLoading(false);
    }
    

    // setIsLoading(true);

   

    // setIsLoading(false);

    resetForm();
  };

  return (
    <FormWrap $isScale={isScale}>
      {isLoading && <h1>Loading...</h1>}
      {/* <Title
        as="h2"
        mb={5}
        color="expense"
        fontSize={["l"]}
        textAlign="center"
      >
        Register Page
      </Title> */}
      <Box mb={60}>
        <Logo />
      </Box>

      {errorMessage 
        ? <AuthError
            href="/login" 
            text="Login" 
            errorMessage={errorMessage} 
            resetError={setErrorMessage} 
          />
        : <FormContainer<IRegisterValues>
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={registerSchema}
        render={(formik) => <RegisterFormFields formik={formik} loading={isLoading} />}
      />
      }  

      
    </FormWrap>
  );
}




// function ddd(x: any) {
//   if (x === 20) {
//     console.log('Hello');
//   }
//   else {
//     console.log("Djon");
//   }
// }
// ddd(230)

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
