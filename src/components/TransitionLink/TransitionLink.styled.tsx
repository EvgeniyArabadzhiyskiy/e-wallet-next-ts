"use client";

import { styled } from "styled-components";

export const NavLink = styled.button<{ $isActive: boolean }>`
  display: flex;
  gap: 23px;
  background-color: transparent;

  font-weight: ${(p) =>
    p.$isActive ? p.theme.fontWeights.bold : p.theme.fontWeights.normal};

  color: #10b981;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #34d399;
  }
`;
