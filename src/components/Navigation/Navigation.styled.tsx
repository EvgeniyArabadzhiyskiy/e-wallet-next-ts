"use client";

import Link from "next/link";
import styled from "styled-components";

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;

  font-size: ${(p) => p.theme.fontSizes.m};
`;

export const ItemLink = styled.li`
  padding: 4px 0;
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  gap: 23px;

  font-weight: ${(p) =>
    p.$isActive ? p.theme.fontWeights.bold : p.theme.fontWeights.normal};

  color: #10b981;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #34d399;
  }
`;

export const LinkText = styled.p`
  color: currentColor;
`;
