'use client'

import { useState } from "react";
import { FormikProps } from "formik";

import { Box } from "../Box/Box";
import FormInput from "../FormInput";
import UserSvg from "../SvgComponent/UserSvg";
import EmailSvg from "../SvgComponent/EmailSvg";
import PasswordSvg from "../SvgComponent/PasswordSvg";
import LinkButton from "../Buttons/LinkButton";
import EnterButton from "../Buttons/EnterButton";
import PasswordToggleBtn from "../Buttons/PasswordToggleBtn";
import { TRegistrationValues } from "@/src/helpers/formValidation";
import { PasswordIndicator } from "./RegisterFormFields.styled";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";
import GoogleIconSvg from "../SvgComponent/GoogleIconSvg";
import { useGoogleLogin } from "@react-oauth/google";

interface IProps {
  formik: FormikProps<TRegistrationValues>;
  loading: boolean;
}

export default function RegisterFormFields  ({ formik, loading }: IProps) {
    const { isValid, dirty, values, isSubmitting } = formik
    const isDisabled = !(isValid && dirty) || isSubmitting

  const [isHideFirstPass, setIsHideFirstPass] = useState(true);
  const [isHideSecondPass, setIsHideSecondPass] = useState(true);

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

      <Box mb={5} position='relative' >
        <FormInput
          icon={<PasswordSvg width={25} height={24} />}
          type={isHideFirstPass ? "password" : "text"}
          name="password"
          placeholder="Password"
          autoComplete="off"
          inputBtn={ <PasswordToggleBtn isHidePassword={isHideFirstPass} setIsHidePassword={setIsHideFirstPass} />}
        />
        {values.password && <PasswordIndicator $length={values.password} />}
      </Box>

      <Box mb={5} position='relative'>
        <FormInput
          icon={<PasswordSvg width={25} height={24} />}
          type={isHideSecondPass ? "password" : "text"}
          name="confirmPassword"
          placeholder="Confirm Password"
          autoComplete="off"
          inputBtn={ <PasswordToggleBtn isHidePassword={isHideSecondPass} setIsHidePassword={setIsHideSecondPass} />}
        />
        {values.password && <PasswordIndicator $length={values.password} />}
      </Box>

      <Box mb={5} >
        <FormInput 
          icon={ <UserSvg width={25} height={24} />}
          type="text"
          name="firstName" 
          placeholder="First name"
          autoComplete="off"
        />
      </Box>
      <ButtonWrapper>
        <EnterButton 
          type="submit" 
          height={50} 
          maxWidth="300px"
          disabled={isDisabled} 
        >
          {loading ? "LOADING..." : "REGISTER"}
        </EnterButton>
     
        <LinkButton href='/login' text='LOGIN' maxWidth="300px" />

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
};