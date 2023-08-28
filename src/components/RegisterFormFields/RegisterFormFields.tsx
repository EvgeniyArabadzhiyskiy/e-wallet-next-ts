'use client'

import Image from "next/image";
import { useState } from "react";
import { FormikProps } from "formik";

import EmailIcon from "../../../public/images/email.svg";
import PasswordIcon from "../../../public/images/password.svg";
import UserIcon from "../../../public/images/user.svg";

import { Box } from "../Box/Box";
import FormInput from "../FormInput/FormInput";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import EnterButton from "../Buttons/EnterButton/EnterButton";
import PasswordToggleBtn from "../Buttons/PasswordToggleBtn/PasswordToggleBtn";
import { IRegisterValues } from "@/src/types/registerValues";
import { PasswordIndicator } from "./RegisterFormFields.styled";
import PasswordSvg from "../SvgComponent/PasswordSvg";
import EmailSvg from "../SvgComponent/EmailSvg";
import UserSvg from "../SvgComponent/UserSvg";


interface IProps {
  formik: FormikProps<IRegisterValues>;
}

export default function RegisterFormFields  ({ formik }: IProps) {
    const { isValid, dirty, values, isSubmitting } = formik
    const isDisabled = !(isValid && dirty) || isSubmitting

  const [isHideFirstPass, setIsHideFirstPass] = useState(true);
  const [isHideSecondPass, setIsHideSecondPass] = useState(true);

  return (
    <>
      <Box mb={5}>
        <FormInput
          // icon={<Image src={EmailIcon} alt="icon" />}
          icon={<EmailSvg width={25} height={24} />}
          type="email"
          name="email"
          placeholder="E-mail"
          // autoComplete="off"
        />
      </Box>

      <Box mb={5} position='relative' >
        <FormInput
          // icon={<Image src={PasswordIcon} alt="icon" />}
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
          // icon={<Image src={PasswordIcon} alt="icon" />}
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
                // icon={ <Image src={UserIcon} alt="icon" />} 
                icon={ <UserSvg width={25} height={24} />}
                type="text"
                name="name" 
                placeholder="First name"
                autoComplete="off"
            />
        </Box>

      <EnterButton 
        width={{mobile: "80%", desctop: "300px"}} 
        height={50} type="submit" 
        enterText="Register" 
        disabled={isDisabled} 
      />
      <Box mt={4}>
        <LinkButton href='/login' text='Login' />
      </Box>
      {/* <GoogleAuthLink />   */}
    </>
  );
};