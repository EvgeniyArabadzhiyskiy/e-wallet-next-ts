"use client";

import { useState } from "react";
import { FormikProps } from "formik";

import { Box } from "../Box/Box";
import FormInput from "../FormInput";
import EnterButton from "../Buttons/EnterButton";
import LinkButton from "../Buttons/LinkButton";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";
import EmailSvg from "../SvgComponent/EmailSvg";
import PasswordSvg from "../SvgComponent/PasswordSvg";
import PasswordToggleBtn from "../Buttons/PasswordToggleBtn";
import { TLoginValues } from "@/src/helpers/formValidation";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleIconSvg from "../SvgComponent/GoogleIconSvg";

interface IProps {
  formik: FormikProps<TLoginValues>;
  isLoading: boolean;
}

export default function LoginFormFields({ formik, isLoading }: IProps) {
  const { isValid, dirty, isSubmitting } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  const [isHidePassword, setIsHidePassword] = useState(true);

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    ux_mode: "redirect",
    redirect_uri: "http://localhost:3000/api/google-redirect",
    
  });

  return (
    <>
      <Box mb={5}>
        <FormInput
          icon={<EmailSvg width={25} height={24} />}
          type="email"
          name="email"
          placeholder="E-mail"
          // autoComplete="off"
        />
      </Box>

      <Box mb={5}>
        <FormInput
          icon={<PasswordSvg width={25} height={24} />}
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
      <ButtonWrapper>
        <EnterButton
          type="submit"
          height={50}
          maxWidth="300px"
          disabled={isDisabled}
        >
          {isLoading ? "LOADING..." : "LOG IN"}
        </EnterButton>

        <LinkButton href="/register" text="REGISTER" maxWidth="300px" />

        <EnterButton
          type="button"
          height={50}
          maxWidth="300px"
          onClick={() => googleLogin()}
        >
          <GoogleIconSvg width={25} height={25} /> 
          <span>Sign in with Google</span>
        </EnterButton>
      </ButtonWrapper>
    </>
  );
}
