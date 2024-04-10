"use client";

import styled from "styled-components";

export const ButtonExit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: transparent;
  color: ${(p) => p.theme.palette.text.secondaryText};
  font-family: inherit;
  font-size: ${(p) => p.theme.fontSizes.m};

  padding-right: 0;
  padding: 8px;
  margin-left: 20px;
  border-left: 1px solid ${(p) => p.theme.palette.text.secondaryText};
  transition: color 300ms linear;

  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.hoverBgBtn};
  }
  &:focus {
    color: ${(p) => p.theme.colors.hoverBgBtn};
    outline: 1px solid ${(p) => p.theme.colors.hoverBgBtn};
  }
`;

export const Text = styled.span`
  @media ${(p) => p.theme.media.small} {
    display: none;
  }
`;
