"use client";

import styled from 'styled-components';

export const StyledList = styled.div`
  position: relative;
  overflow: hidden;

  margin: 0;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.primaryBg};

  line-height: 1.5;

  border-left: 5px solid
    ${p => (p.borders === 'income' ? '#24CCA7' : '#FF6596')};

  li {
    display: flex;
    justify-content: space-between;

    padding: 12px 20px;
    font-weight: ${p => p.theme.fontWeights.bold};

    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }

  li > span {
    font-weight: ${p => p.theme.fontWeights.normal};
  }
`;

export const SumText = styled.p<{$typeColor: string}>`
  color: ${p => (p.$typeColor === '+' ? '#24CCA7' : '#FF6596')};
`;

