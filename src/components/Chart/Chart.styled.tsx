"use client";

import styled from "styled-components";

export const TitleBalance = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(p) => p.theme.fontSizes.ml};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
