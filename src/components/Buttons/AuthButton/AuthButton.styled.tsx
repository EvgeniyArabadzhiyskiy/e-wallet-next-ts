"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

const baseButtonAuth = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  color: ${(p) => p.theme.palette.text.secondaryText};
  font-family: inherit;
  font-size: ${(p) => p.theme.fontSizes.m};

  width: 100px;
  padding-right: 0;

  @media ${(p) => p.theme.media.small} {
    padding-left: 8px;
  }

  @media ${(p) => p.theme.media.medium} {
    padding-left: 12px;
    margin-left: 12px;
    border-left: 1px solid #bdbdbd;
  }

  &:hover {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const ButtonExit = styled.button`
  ${baseButtonAuth}
`;

export const LinkSignIn = styled(Link)`
  ${baseButtonAuth}
`;

export const Text = styled.span`
  @media ${(p) => p.theme.media.small} {
    display: none;
  }
  margin-left: 8px;
`;
