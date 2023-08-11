"use client";

import styled from "styled-components";

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

  @media ${(p) => p.theme.media.large} {
    display: flex;
    justify-content: space-between;
  }

  p {
    @media ${(p) => p.theme.media.medium} {
      margin: 0;
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: ${(p) => p.theme.colors.primaryBg};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  border-radius: 30px;
  height: 58px;
  color: ${(p) => p.theme.colors.primaryText};

  @media ${(p) => p.theme.media.medium} {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }

  p {
    @media ${(p) => p.theme.media.medium} {
      margin: 0;
      &:nth-child(1) {
        width: 15%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const StyledTable = styled.div`
  margin: 0 auto;
  /* max-width: 336px; */

  @media ${(p) => p.theme.media.medium} {
    /* margin: 0 20px; */
    margin-right: 0;
    width: 336px;
  }

  @media ${(p) => p.theme.media.large} {
    /* margin: 0 16px 0 32px; */
    margin-left: 32px;
    width: 395px;
  }
`;

export const StyledTableBody = styled.ul`
  margin: 0;
  padding: 0 20px;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    border-bottom: 1px solid #dcdcdf;
  }
  li > p {
    margin: 0;

    @media ${(p) => p.theme.media.medium} {
      &:nth-child(1) {
        width: 40%;
      }
      &:nth-child(2) {
        width: 15%;
        display: flex;
        justify-content: center;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 25%;
      }
      &:nth-child(5) {
        width: 10%;
        font-weight: ${(p) => p.theme.fontWeights.bold};
        display: flex;
        justify-content: flex-end;
      }
      &:nth-child(6) {
        width: 15%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  li > p > span {
    color: ${(p) => p.theme.colors.primaryText};
  }
`;

export const StyledTableFooter = styled.ul`
  margin: 0;
  border-radius: 10px;
  li {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    padding: 12px 20px;
    border: none;
    display: flex;
    justify-content: space-between;
  }
  li > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(p) => p.theme.colors.primaryText};
`;

export const ColorSpan = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-color: ${(p) => p.category};
`;

export const StyledText = styled.p`
  color: ${(p) => (p.type === "expense" ? "#FF6596" : "#24CCA7")};
`;
