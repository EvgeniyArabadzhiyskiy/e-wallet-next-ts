"use client";

import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${(p) => p.theme.fonts.poppins};
  font-size: 24px;
  line-height: 35px;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  color: ${(p) => p.theme.colors.white};
  text-align: center;
  margin-bottom: 40px;

  @media ${(p) => p.theme.media.medium} {
    font-size: ${(p) => p.theme.fontSizes.l};
    line-height: 45px;
  }
`;
