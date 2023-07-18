"use client"

import styled, { keyframes } from 'styled-components';
import { baseBtnStyle } from '../DefaultButton.styled';

export const scale = keyframes`
    0% {
      border: 7px solid rgba(55, 53, 53, 0.4);
      /* transform: scale(0.6);
      opacity: 1; */
    }
    50% {
      border: 1px solid rgba(55, 53, 53, 0.4);
      /* transform: scale(1);
      opacity: 0.7; */
    }
    100% {
      border: 7px solid rgba(55, 53, 53, 0.4);
      /* transform: scale(0.6);
      opacity: 1; */
    }
`;

export const StyledEnterBtn = styled.button`
  ${baseBtnStyle}

  position: relative;
  color: ${p => p.theme.colors.primaryBg};
  border: 7px solid rgba(55, 53, 53, 0.4);
  margin-top: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.primaryBgBtn};

  /* &:hover {
  border: 7px solid ${p => p.theme.colors.primaryBgBtn};

} */

  /* transition: border 300ms linear; */

  &:disabled {
    opacity: 0.7;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  &:hover,
  &:focus {
    /* border: 4px solid rgb(255, 3, 3); */
    animation: 2000ms ${scale} infinite;
  }
`;