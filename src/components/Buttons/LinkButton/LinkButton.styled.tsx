"use client";

import Link from "next/link";
import styled from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";

export const StyledLink = styled(Link)`
  ${baseBtnStyle}
  height: 50px;
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  /* border: 1px solid #15275160;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.primaryBgBtn};
  border-bottom: 5px solid #15275160;
  transition: all 150ms linear; */

  /* &:hover,
  &:focus {
    border-color: #31a1cd;
    border-bottom: 1px solid #3187cd;
    color: #3187cd;
  } */

  color: #a1a1aa;
  background-color: #022c22;
  border-radius: 10px;
  border: 2px solid #10b981;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #064e3b;
  }

  @media ${(p) => p.theme.media.medium} {
    width: 300px;
  }
`;
