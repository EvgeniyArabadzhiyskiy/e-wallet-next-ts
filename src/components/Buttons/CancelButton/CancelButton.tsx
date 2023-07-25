"use client";

import { StyledCancelBtn } from "./CancelButton.styled";

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  cancelText: string;
}

function CancelButton({ cancelText, onClick, ...allProps }: IProps) {
  return (
    <StyledCancelBtn type="button" onClick={onClick} {...allProps}>
      {cancelText}
    </StyledCancelBtn>
  );
}

export default CancelButton;
