"use client";

import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #74a887;
  /* height: 100px; */
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.secondaryText};
`;


export const TextName = styled.div`
  font-size: 24px;
  margin-left: 8px;
`;
