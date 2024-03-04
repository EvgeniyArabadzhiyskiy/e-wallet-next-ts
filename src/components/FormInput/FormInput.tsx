import React from "react";
import { ErrorText, Input, Label } from "./FormInput.styled";

interface IProps {
  name: string;
  type: string;
  inputBtn?: React.ReactNode;
  icon?: JSX.Element;
  value?: number | string;
  placeholder?: string;
  autoComplete?: string;
}

const FormInput: React.FC<IProps> = ({
  name,
  type = "text",
  inputBtn = null,
  icon = null,
  ...allProps
}) => {
  return (
    <Label>
      {icon}
      <Input type={type} name={name} {...allProps} />
      {inputBtn}
      <ErrorText component="div" name={name} />
    </Label>
  );
};

export default FormInput;
