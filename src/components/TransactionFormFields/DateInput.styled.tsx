"use client";

import styled from "styled-components";

export const StyledInput = styled.input`
  width: 120px;
  /* width: 100%; */
  padding-left: 20px;
  border: ${(p) => p.theme.borders.none};
  outline: none;
  background-color: inherit;
  color: ${(p) => p.theme.colors.white};
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
`;

export const OpenButton = styled.button`
  background-color: inherit;
`;
