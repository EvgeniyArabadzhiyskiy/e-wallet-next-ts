import { MouseEventHandler } from "react";
import { StyledEnterBtn } from "./EnterButton.styled";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  enterText: string;
  disabled?: boolean | undefined;
}

const EnterButton: React.FC<IProps> = ({ type = "submit", onClick, enterText, disabled, ...allProps}) => {
  return (
    <StyledEnterBtn type={type} onClick={onClick} disabled={disabled} {...allProps}>
      {enterText}
    </StyledEnterBtn>
  );
};

export default EnterButton;
