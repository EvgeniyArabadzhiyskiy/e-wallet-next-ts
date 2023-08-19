"use client";

import styled from "styled-components";

export const PageTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: white;
  margin: 20px 0;

  @media ${(p) => p.theme.media.large} {
    margin: 32px 0 20px 20px;
  }
`;

export const TableWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ChartWrapper = styled.div`
  position: relative;
  align-self: flex-start;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    min-width: 300px;
  }
`;
