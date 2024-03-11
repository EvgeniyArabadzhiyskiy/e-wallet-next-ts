"use client";

import styled from "styled-components";

export const StyledInput = styled.input`
  width: 120px;
  padding-left: 20px;
  border: ${(p) => p.theme.borders.none};
  outline: none;
  background-color: inherit;
  color: ${(p) => p.theme.colors.white};
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
`;

export const OpenButton = styled.button`
  background-color: inherit;
`;
