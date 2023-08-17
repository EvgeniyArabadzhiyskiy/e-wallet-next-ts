import { MouseEventHandler } from "react";
import { StyledEnterBtn } from "./EnterButton.styled";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  enterText: string;
  disabled?: boolean | undefined;

  height: number;
  width: {
    mobile: string;
    desctop: string;
  }
}

function EnterButton ({ width, height, type = "submit", onClick, enterText, disabled, ...allProps}: IProps)  {
  return (
    <StyledEnterBtn width={width} height={height} type={type} onClick={onClick} disabled={disabled} {...allProps}>
      {enterText}
    </StyledEnterBtn>
  );
};

export default EnterButton;
