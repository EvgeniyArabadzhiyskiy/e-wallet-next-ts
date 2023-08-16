"use client"

import styled, { keyframes } from 'styled-components';
import { baseBtnStyle } from '../DefaultButton.styled';

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

export const StyledEnterBtn = styled.button<{width: number[]; height: number}>`
  ${baseBtnStyle}
  width: ${p => p.width[0]}%;
  /* height: 50px; */

  /* width: ${p => p.width}; */
  height: ${p => p.height}px;

  /* position: relative; */
  /* margin-top: ${p => p.theme.space[5]}px; */
  /* color: ${p => p.theme.palette.background.primaryBg}; */
  /* border: 7px solid rgba(55, 53, 53, 0.4); */
  /* background-color: ${p => p.theme.colors.primaryBgBtn}; */

  color: #a1a1aa;
  background-color: #022c22;
  border-radius: 10px;
  border: 2px solid #10b981;
  transition: background-color 300ms linear;

  &:disabled {
    opacity: 0.7;
  }

  /* &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  } */

  &:hover,
  &:focus {
    /* animation: 2000ms ${scale} infinite; */
    background-color: #064e3b;
  }

  @media ${(p) => p.theme.media.medium} {
    /* width: 300px; */
    width: ${p => p.width[1]}px;
  }

  
`;