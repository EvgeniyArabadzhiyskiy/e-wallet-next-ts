"use client"

import styled, { css } from 'styled-components';

export const CommonStyle = css`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;

  display: grid;
  grid-template-columns: 5% 15% 15% 20% 20% 10% 15%;
  align-items: center;

  p {
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
  }
`;

export const StyledTableHeader = styled.div`
  ${CommonStyle}

  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.primaryBg};
  padding: 15px 20px;
  border-radius: 30px;
`;

export const StyledTable = styled.div`
  margin-top: 46px;

  @media ${p => p.theme.media.large} {
    width: 715px;
  }
`;

export const StyledTableBody = styled.ul`
  margin: 0;
  padding: 0 15px 0 20px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;

  overflow-y: scroll;
  max-height: 260px;
`;

export const CategoryName = styled.p`
  color: ${p => p.theme.colors.primaryText};
`;

export const SumText = styled.p<{$typeColor: string}>`
  color: ${p => (p.$typeColor === '+' ? '#24CCA7' : '#FF6596')};
`;
