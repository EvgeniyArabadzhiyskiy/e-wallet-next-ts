"use client";

import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: 0% 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const Loader = styled.div`
  height: 308px;

  background: linear-gradient(to left, #111827, #a7acb1);
  background-size: 200% 100%;

  filter: blur(10px);
  animation: ${loadingAnimation} 1s ease infinite;

  @media (min-width: 768px) {
    width: 672px;

    border-bottom: 1px solid #dcdcdf;
  }
`;