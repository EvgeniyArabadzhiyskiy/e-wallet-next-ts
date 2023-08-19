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
  width: {
    mobile: string;
    desctop: string;
  };
  height: number;
}

export const StyledEnterBtn = styled.button<IBtnProps>`
  ${baseBtnStyle}
  width: ${(p) => p.width.mobile};
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

  @media ${(p) => p.theme.media.medium} {
    width: ${(p) => p.width.desctop};
  }
`;
