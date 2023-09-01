"use client";

import styled from "styled-components";

export const Border = styled.div`
  border: 10px solid rgba(255, 255, 255, 0.2);
`;

export const Modal = styled.div`
  min-width: 300px;
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.ml};
  color: ${(p) => p.theme.colors.white};
  line-height: 1.2;
  text-align: center;
`;
