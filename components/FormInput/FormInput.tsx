import React from "react";
import { ErrorText, Input, Label } from "./FormInput.styled";
// import Image from "next/image";

interface IProps {
  name: string;
  type: string;
  inputBtn?: any;
  icon?: any;
//   src?: string | undefined;
}

const FormInput: React.FC<IProps> = ({
  name,
  type = "text",
  inputBtn = null,
  icon = null,
//   src,
  ...allProps
}) => {
  return (
    <Label>
      {icon}
      {/* <Image src={src} alt={name} /> */}
      <Input type={type} name={name} {...allProps} />
      {inputBtn}
      <ErrorText component="div" name={name} />
    </Label>
  );
};

export default FormInput;
