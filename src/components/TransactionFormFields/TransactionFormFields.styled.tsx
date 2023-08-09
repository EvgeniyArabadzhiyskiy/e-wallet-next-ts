"use client";

import styled from "styled-components";
import { ErrorMessage } from "formik";

export const DateWrapper = styled.div`
  

  @media ${(p) => p.theme.media.medium} {
    display: flex;
    align-items: flex-end;
    column-gap: 30px;
    width: 100%;
  }
`;

export const SumWrapper = styled.div`
  margin-bottom: ${(p) => p.theme.space[5]}px;

  @media ${(p) => p.theme.media.medium} {
    margin: ${(p) => p.theme.space[0]}px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  top: -20px;
  left: 2px;

  font-size: 14px;
  letter-spacing: 0.05em;
  white-space: nowrap;

  color: #29ffd0;
`;
