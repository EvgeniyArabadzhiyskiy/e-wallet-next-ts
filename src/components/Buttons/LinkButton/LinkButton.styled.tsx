"use client";

import Link from "next/link";
import styled from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";

export const StyledLink = styled(Link)<{ $maxWidth: string }>`
  ${baseBtnStyle}
  height: 50px;
  width: 100%;
  max-width: ${(p) => p.$maxWidth};

  display: flex;
  align-items: center;
  justify-content: center;

  color: #a1a1aa;
  background-color: #022c22;
  border-radius: 10px;
  border: 2px solid #10b981;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #064e3b;
  }
`;
