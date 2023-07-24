"use client";

import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.palette.background.primaryBg};
  /* height: 100px; */
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
  width: 50px;
  font-size: 24px;
  margin-left: 8px;
`;
