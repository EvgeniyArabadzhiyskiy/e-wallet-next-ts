'use client'

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


interface IProps {
  formik: FormikProps<ILoginValues>;
}

export default function LoginFormFields  ({ formik }: IProps) {
  const { isValid, dirty, isSubmitting } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  const [isHidePassword, setIsHidePassword] = useState(true);
  // console.log("isHidePassword:", isHidePassword);

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
          inputBtn={ <PasswordToggleBtn isHidePassword={isHidePassword} setIsHidePassword={setIsHidePassword} />}
        />
      </Box>

      <EnterButton width={[80, 300]} height={50} type="submit" enterText="Log in" disabled={isDisabled} />
      <LinkButton href='/register' text='Register' />
      {/* <GoogleAuthLink />   */}
    </>
  );
};
