"use client";

import styled from "styled-components";

export const SideBarContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 46px;
    padding-right: 70px;
    border-right: 1px solid rgb(231, 229, 242);
  }
`;
