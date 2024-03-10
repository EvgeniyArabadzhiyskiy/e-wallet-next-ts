import React from "react";
import { ErrorText, Input, Label } from "./FormInput.styled";

interface IProps {
  name: string;
  type: string;
  inputBtn?: React.ReactNode;
  icon?: JSX.Element | null;
  value?: number | string;
  placeholder?: string;
  autoComplete?: string;
}

function FormInput({ name, type = "text", inputBtn = null, icon = null, ...allProps }: IProps) {
  return (
    <Label>
      {icon}
      <Input type={type} name={name} {...allProps} />
      {inputBtn}
      <ErrorText component="div" name={name} />
    </Label>
  );
}

export default FormInput;
