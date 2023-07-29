"use client";

import styled from "styled-components";

export const StyledList = styled.ul`
  max-width: 280px;
  margin: auto;
  border-left: 5px;

  overflow-y: scroll;
  max-height: 500px;

  div {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
