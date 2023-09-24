"use client";

import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  @media ${(p) => p.theme.media.medium} {
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
  }
`;
