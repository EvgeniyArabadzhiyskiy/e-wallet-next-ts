"use clien";

import styled from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";

export const StyledCancelBtn = styled.button`
  ${baseBtnStyle}
  height: 50px;
  width: 80%;

  color: #a1a1aa;
  background-color: #111827;
  border-radius: 10px;
  border: 2px solid #404041;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #1f2937;
  }

  @media ${(p) => p.theme.media.medium} {
    width: 300px;
  }
`;
