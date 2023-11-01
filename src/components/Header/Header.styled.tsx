"use client";

import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #e2e6eb;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.palette.text.secondaryText};
`;


export const TextName = styled.div`
  font-size: 24px;
  margin-left: 8px;
`;
