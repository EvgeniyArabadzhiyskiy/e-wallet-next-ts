"use clien";

import styled from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";

export const StyledCancelBtn = styled.button`
  ${baseBtnStyle}
  height: 50px;
  width: 80%;

  /* margin-top: ${(p) => p.theme.space[4]}px; */
  /* color: ${(p) => p.theme.colors.secondaryBtn}; */
  /* border: 7px solid rgba(55, 53, 53, 0.4); */

  color: #a1a1aa;
  background-color: #111827;
  border-radius: 10px;
  border: 2px solid #404041;
  transition: background-color 300ms linear;

  &:hover {
    /* color: ${(p) => p.theme.colors.primaryBgBtn};
    border: 1px solid ${(p) => p.theme.colors.primaryBgBtn}; */

    background-color: #1f2937;
  }

  /* transition: all 300ms linear; */

  @media ${(p) => p.theme.media.medium} {
    width: 300px;
    
  }
`;
