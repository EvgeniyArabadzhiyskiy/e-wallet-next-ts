"use client";

import styled, { css, keyframes } from "styled-components";

export const baseBtnStyle = css`
  display: block;

  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};

  line-height: 1.5;
  letter-spacing: ${(p) => p.theme.letterSpacings.body};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 80%;
  margin: 0 auto;
`;