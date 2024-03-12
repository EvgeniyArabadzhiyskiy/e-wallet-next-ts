"use client";

import styled, { keyframes } from "styled-components";
import { baseBtnStyle } from "../DefaultButton.styled";

export const scale = keyframes`
    0% {
      border: 7px solid rgba(55, 53, 53, 0.4);
     
    }
    50% {
      border: 1px solid rgba(55, 53, 53, 0.4);
     
    }
    100% {
      border: 7px solid rgba(55, 53, 53, 0.4);
    
    }
`;

interface IBtnProps {
  height: number;
  $maxWidth: string;
}

export const StyledEnterBtn = styled.button<IBtnProps>`
  ${baseBtnStyle}

  width: 100%;
  max-width: ${(p) => p.$maxWidth};
  height: ${(p) => p.height}px;

  color: #a1a1aa;
  background-color: #022c22;
  border-radius: 10px;
  border: 2px solid #10b981;
  transition: background-color 300ms linear;

  &:disabled {
    opacity: 0.7;
  }

  &:hover,
  &:focus {
    background-color: #064e3b;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
