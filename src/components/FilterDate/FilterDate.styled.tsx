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
`;
