'use client'

import { useState } from "react";
import { FormikProps } from "formik";

import { Box } from "../Box/Box";
import UserSvg from "../SvgComponent/UserSvg";
import EmailSvg from "../SvgComponent/EmailSvg";
import PasswordSvg from "../SvgComponent/PasswordSvg";
import FormInput from "../FormInput/FormInput";
import LinkButton from "../Buttons/LinkButton";
import EnterButton from "../Buttons/EnterButton";
import PasswordToggleBtn from "../Buttons/PasswordToggleBtn/PasswordToggleBtn";
import { IRegisterValues } from "@/src/types/registerValues";
import { PasswordIndicator } from "./RegisterFormFields.styled";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";

interface IProps {
  formik: FormikProps<IRegisterValues>;
  loading: boolean;
}

export default function RegisterFormFields  ({ formik, loading }: IProps) {
    const { isValid, dirty, values, isSubmitting } = formik
    const isDisabled = !(isValid && dirty) || isSubmitting

  const [isHideFirstPass, setIsHideFirstPass] = useState(true);
  const [isHideSecondPass, setIsHideSecondPass] = useState(true);

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
        {values.password && <PasswordIndicator length={values.password} />}
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
        {values.password && <PasswordIndicator length={values.password} />}
      </Box>

      <Box mb={5} >
        <FormInput 
            icon={ <UserSvg width={25} height={24} />}
            type="text"
            name="name" 
            placeholder="First name"
            autoComplete="off"
        />
        </Box>
      <ButtonWrapper>
        <EnterButton 
          type="submit" 
          height={50} 
          maxWidth="300px" 
          // enterText="REGISTER" 
          enterText={loading ? "LOADING..." : "REGISTER"}
          disabled={isDisabled} 
        />
     
        <LinkButton href='/login' text='LOGIN' maxWidth="300px" />
      </ButtonWrapper>
    </>
  );
};