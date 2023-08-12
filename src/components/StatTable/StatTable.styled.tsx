"use client";

import styled from "styled-components";

export const StyledTable = styled.div`
  @media ${(p) => p.theme.media.medium} {
    width: 336px;
  }

  @media ${(p) => p.theme.media.large} {
    width: 395px;
  }
`;

export const StyledFilters = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  padding: 0;
  border-radius: 30px;

  @media ${(p) => p.theme.media.medium} {
    padding: 0 0 15px 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 58px;
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 30px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;

  color: ${(p) => p.theme.colors.primaryText};
  background-color: ${(p) => p.theme.colors.primaryBg};
`;

export const StyledTableBody = styled.ul`
  padding: 0 20px;
  line-height: 1.5;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    border-bottom: 1px solid #2b2b92;
  }
`;

export const StyledTableFooter = styled.ul`
  margin: 0;
  border-radius: 10px;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;

  li {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
  }
`;

export const StyledItem = styled.div`
  display: flex;
`;

export const ColorSpan = styled.span<{ category: string }>`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-color: ${(p) => p.category};
`;

export const StyledText = styled.p`
  color: ${(p) => (p.type === "expense" ? "#FF6596" : "#24CCA7")};
`;
