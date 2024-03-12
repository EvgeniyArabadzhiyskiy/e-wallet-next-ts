import { FlexWrapper, StyledEnterBtn } from "./EnterButton.styled";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  enterText: string;
  disabled?: boolean | undefined;
  children?: React.ReactNode;

  height: number;
  maxWidth: string;
}

function EnterButton ({ height, maxWidth, type = "submit", onClick, enterText, disabled, children, ...allProps}: IProps)  {
  return (
    <StyledEnterBtn  
      type={type} 
      height={height} 
      $maxWidth={maxWidth} 
      onClick={onClick} 
      disabled={disabled} 
      {...allProps}
    >
      <FlexWrapper>{children} {enterText}</FlexWrapper>
    </StyledEnterBtn>
  );
};

export default EnterButton;
