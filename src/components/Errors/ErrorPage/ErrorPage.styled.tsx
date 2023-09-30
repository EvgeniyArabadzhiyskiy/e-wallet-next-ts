"use client";

import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  padding: 30px 0;

  @media ${(p) => p.theme.media.medium} {
    padding: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-top: 28px;

  @media ${(p) => p.theme.media.medium} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 20px;
  }
`;
