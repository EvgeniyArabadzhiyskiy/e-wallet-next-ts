import Image from "next/image";
import { useState } from "react";
import { FormikProps } from "formik";
import { ILoginValues } from "@/types/loginValues";

import EmailIcon from "../../public/images/email.svg";
import PasswordIcon from "../../public/images/password.svg";

import { Box } from "../Box/Box";
import FormInput from "../FormInput/FormInput";
import EnterButton from "../Buttons/EnterButton/EnterButton";
import LinkButton from "../Buttons/LinkButton/LinkButton";


interface IProps {
  formik: FormikProps<ILoginValues>;
}

const LoginFormFields: React.FC<IProps> = ({ formik }) => {
  const { isValid, dirty, isSubmitting } = formik;
  const isDisabled = !(isValid && dirty) || isSubmitting;

  const [isHidePassword, setIsHidePassword] = useState(true);

  return (
    <>
      <Box mb={5}>
        <FormInput
          // icon={ <EmailIcon />}
          icon={<Image src={EmailIcon} alt="icon" />}
          type="email"
          name="email"
          // placeholder="E-mail"
          // autoComplete="off"
        />
      </Box>

      <Box mb={5}>
        <FormInput
          // icon={ <PasswordIcon /> }
          icon={<Image src={PasswordIcon} alt="icon" />}
          type={isHidePassword ? "password" : "text"}
          name="password"
          // placeholder="Password"
          // autoComplete="off"
          // inputBtn={ <EyesButton isHidePass={isHidePassword} setIsHidePass={setIsHidePassword} />}
        />
      </Box>

      <EnterButton enterText="log in" disabled={isDisabled} />
      {/* <LinkButton href='/register' text='register' /> */}
      {/* <GoogleAuthLink />   */}
    </>
  );
};

export default LoginFormFields;
