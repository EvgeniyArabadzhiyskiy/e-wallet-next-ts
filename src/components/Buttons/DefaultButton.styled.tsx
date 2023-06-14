"use client";

import styled, { css, keyframes } from "styled-components";

export const baseBtnStyle = css`
  display: block;
  height: 50px;
  min-width: 280px;
  margin-left: auto;
  margin-right: auto;

  font-size: ${(p) => p.theme.fontSizes.m};
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.normal};

  line-height: 1.5;
  letter-spacing: ${(p) => p.theme.letterSpacings.body};
  cursor: pointer;
  text-transform: uppercase;

  @media ${(p) => p.theme.media.medium} {
    width: 300px;
  }
`;
