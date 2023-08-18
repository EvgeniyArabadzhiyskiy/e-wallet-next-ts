"use client";

import Image from "next/image";
import { useState } from "react";
import { FormikProps } from "formik";
import { ILoginValues } from "@/src/types/loginValues";

import EmailIcon from "../../../public/images/email.svg";
import PasswordIcon from "../../../public/images/password.svg";

import { Box } from "../Box/Box";
import FormInput from "../FormInput/FormInput";
import EnterButton from "../Buttons/EnterButton/EnterButton";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import PasswordToggleBtn from "../Buttons/PasswordToggleBtn/PasswordToggleBtn";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleAuthLink from "../Buttons/GoogleAuthLink/GoogleAuthLink";

interface IProps {
  formik: FormikProps<ILoginValues>;
}

export default function LoginFormFields({ formik }: IProps) {
  const { isValid, dirty, isSubmitting } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  const { data: session } = useSession()
  console.log("LoginFormFields  data:", session);

  const [isHidePassword, setIsHidePassword] = useState(true);
  // console.log("isHidePassword:", isHidePassword);

  const onGoogle = async () => {
    const user = await signIn(
      'google', {
      // redirect: true,
      callbackUrl: 'http://localhost:3000/home/transactions',
      // callbackUrl: "https://wallet-backend-xmk0.onrender.com/api/auth-google/google-redirect"
    }
    ) 
    console.log("onGoogle  user:", user);
  }

  const onSignOut = async () => {
    signOut()
  }

  return (
    <>
      <Box mb={5}>
        <FormInput
          icon={<Image src={EmailIcon} alt="icon" />}
          type="email"
          name="email"
          placeholder="E-mail"
          // autoComplete="off"
        />
      </Box>

      <Box mb={5}>
        <FormInput
          icon={<Image src={PasswordIcon} alt="icon" />}
          type={isHidePassword ? "password" : "text"}
          name="password"
          placeholder="Password"
          autoComplete="off"
          inputBtn={
            <PasswordToggleBtn
              isHidePassword={isHidePassword}
              setIsHidePassword={setIsHidePassword}
            />
          }
        />
      </Box>

      <EnterButton
        width={{ mobile: "80%", desctop: "300px" }}
        height={50}
        type="submit"
        enterText="Log in"
        disabled={isDisabled}
      />
      <Box mt={4}>
        <LinkButton href="/register" text="Register" />
      </Box> 
      {/* <button type="button" onClick={onGoogle}>Sign In with Google</button>  */}
      
      <GoogleAuthLink />  
    </>
  );
}
