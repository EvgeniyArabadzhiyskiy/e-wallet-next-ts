"use clien";

import styled from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";

export const StyledCancelBtn = styled.button`
  ${baseBtnStyle}

  margin-top: ${(p) => p.theme.space[4]}px;
  color: ${(p) => p.theme.colors.secondaryBtn};
  border: 7px solid rgba(55, 53, 53, 0.4);

  &:hover {
    color: ${(p) => p.theme.colors.primaryBgBtn};
    border: 1px solid ${(p) => p.theme.colors.primaryBgBtn};
  }

  transition: all 300ms linear;
`;
