import { StyledEnterBtn } from "./EnterButton.styled";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  enterText: string;
  disabled?: boolean | undefined;

  height: number;
  maxWidth: string;
}

function EnterButton ({ height, maxWidth, type = "submit", onClick, enterText, disabled, ...allProps}: IProps)  {
  return (
    <StyledEnterBtn  height={height} $maxWidth={maxWidth} type={type} onClick={onClick} disabled={disabled} {...allProps}>
      {enterText}
    </StyledEnterBtn>
  );
};

export default EnterButton;
