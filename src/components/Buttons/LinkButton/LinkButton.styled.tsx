"use client";

import Link from "next/link";
import styled from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";

export const StyledLink = styled(Link)`
  ${baseBtnStyle}

  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #15275160;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.primaryBgBtn};
  border-bottom: 5px solid #15275160;
  transition: all 150ms linear;

  &:hover,
  &:focus {
    border-color: #31a1cd;
    border-bottom: 1px solid #3187cd;
    color: #3187cd;
  }
`;
