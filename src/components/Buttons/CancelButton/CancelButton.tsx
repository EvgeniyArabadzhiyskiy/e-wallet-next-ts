"use client";

import { StyledCancelBtn } from "./CancelButton.styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function CancelButton({ ...allProps }: IProps) {
  return <StyledCancelBtn type="button" {...allProps} />;
}

export default CancelButton;
