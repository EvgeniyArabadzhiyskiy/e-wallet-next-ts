"use client";

import styled, { css } from "styled-components";

const baseButtonAuth = css`
  display: flex;
  background-color: transparent;
  cursor: pointer;

  color: ${(p) => p.theme.palette.text.secondaryText};
  font-family: inherit;
  font-size: ${(p) => p.theme.fontSizes.m};

  padding-right: 0;
  padding: 8px;
  margin-left: 20px;
  border-left: 1px solid #bdbdbd;
  transition: color 300ms linear;

  &:hover {
    color: #10b981;
  }
  &:focus {
    color: #10b981;
    outline: 1px solid #10b981;
  }
`;

export const ButtonExit = styled.button`
  ${baseButtonAuth}
`;

export const Text = styled.span`
  @media ${(p) => p.theme.media.small} {
    display: none;
  }
  margin-left: 8px;
`;
