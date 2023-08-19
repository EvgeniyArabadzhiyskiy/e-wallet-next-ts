"use client";

import styled, { css } from "styled-components";
import { ItemTextPosition } from "../TransactionTable.styled";

export const CommonStyle = css`
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;

  display: grid;
  grid-template-columns: 5% 15% 15% 20% 20% 10% 15%;
  align-items: center;
`;

export const StyledItem = styled.li<{ $borders: string }>`
  position: relative;
  overflow: hidden;

  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.primaryBg};

  border-left: 5px solid
    ${(p) => (p.$borders === "income" ? "#24CCA7" : "#FF6596")};

  @media (min-width: 768px) {
    ${CommonStyle};

    height: 52px;
    margin-bottom: 0;
    border-radius: inherit;
    background-color: inherit;

    border-left: none;

    border-bottom: 1px solid #dcdcdf;
  }
`;

export const SumColorText = styled.p<{ $typeColor: string }>`
  color: ${(p) => (p.$typeColor === "+" ? "#24CCA7" : "#FF6596")};

  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  @media (min-width: 768px) {
    ${ItemTextPosition};
    display: block;
    padding: 0;
  }
`;

export const CategoryName = styled.span`
  font-weight: 700;

  @media ${(p) => p.theme.media.medium} {
    display: none;
  }
`;

export const SettingsBtn = styled.button`
  display: flex;
  padding: 5px;
  background-color: transparent;
  transition: color 300ms linear;

  &:hover {
    color: ${(p) => p.theme.colors.primaryBgBtn};
  }

  @media ${(p) => p.theme.media.medium} {
    padding: 10px;
  }
`;
