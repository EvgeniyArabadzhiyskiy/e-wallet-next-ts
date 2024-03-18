import { StyledEnterBtn } from "./EnterButton.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  height: number;
  maxWidth: string;
}

function EnterButton({ height, maxWidth, ...allProps }: IProps) {
  return <StyledEnterBtn height={height} $maxWidth={maxWidth} {...allProps} />;
}

export default EnterButton;
