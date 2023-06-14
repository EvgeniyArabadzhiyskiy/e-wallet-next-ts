import React from "react";
import { ErrorText, Input, Label } from "./FormInput.styled";

interface IProps {
  name: string;
  type: string;
  inputBtn?: any;
  icon?: any;
  placeholder?: string;
  autoComplete?: string; 
  // [key: string]: any;

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
