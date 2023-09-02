"use client";

import { useState } from "react";
import { FormikProps } from "formik";
import { ILoginValues } from "@/src/types/loginValues";

import { Box } from "../Box/Box";
import FormInput from "../FormInput/FormInput";
import EnterButton from "../Buttons/EnterButton";
import LinkButton from "../Buttons/LinkButton";
import { ButtonWrapper } from "../Buttons/DefaultButton.styled";
import EmailSvg from "../SvgComponent/EmailSvg";
import PasswordSvg from "../SvgComponent/PasswordSvg";
import PasswordToggleBtn from "../Buttons/PasswordToggleBtn/PasswordToggleBtn";

interface IProps {
  formik: FormikProps<ILoginValues>;
}

export default function LoginFormFields({ formik }: IProps) {
  const { isValid, dirty, isSubmitting } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  const [isHidePassword, setIsHidePassword] = useState(true);

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
          enterText="LOG IN"
          disabled={isDisabled}
        />
        <LinkButton href="/register" text="REGISTER" maxWidth="300px" />
      </ButtonWrapper>
    </>
  );
}
