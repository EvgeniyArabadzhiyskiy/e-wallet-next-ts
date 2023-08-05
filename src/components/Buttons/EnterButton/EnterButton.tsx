import { MouseEventHandler } from "react";
import { StyledEnterBtn } from "./EnterButton.styled";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  enterText: string;
  disabled?: boolean | undefined;
}

function EnterButton ({ type = "submit", onClick, enterText, disabled, ...allProps}: IProps)  {
  return (
    <StyledEnterBtn type={type} onClick={onClick} disabled={disabled} {...allProps}>
      {enterText}
    </StyledEnterBtn>
  );
};

export default EnterButton;
