"use client";

import styled, { css } from "styled-components";

export const Table = styled.main`
  margin-top: 46px;

  @media ${(p) => p.theme.media.large} {
    width: 715px;
  }
`;

export const TableBody = styled.ul`
  margin: auto;
  max-width: 280px;

  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;

  @media (min-width: 768px) {
    overflow-y: scroll;

    max-width: inherit;
    max-height: 260px;
    padding: 0 15px 0 20px;
  }
`;

export const CommonStyle = css`
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;

  display: grid;
  grid-template-columns: 5% 15% 15% 20% 20% 10% 15%;
  align-items: center;
`;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: 768px) {
    ${CommonStyle}

    padding: 15px 20px;
    border-radius: 10px;
    border: 2px solid #10b981;

    font-weight: ${(p) => p.theme.fontWeights.bold};
  }
`;

export const ItemTextPosition = css`
  &:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(3) {
    text-align: center;
  }

  &:nth-child(6) {
    text-align: end;
  }

  &:nth-child(7) {
    text-align: end;
  }
`;

export const Category = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  @media (min-width: 768px) {
    ${ItemTextPosition};
    display: block;
    padding: 0;

    color: #a1a1aa;
  }
`;
