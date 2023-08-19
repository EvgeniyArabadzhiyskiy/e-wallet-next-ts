"use client";

import styled from "styled-components";

export const Menu = styled.div<{ $isDelete: boolean; isOpenMenu: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3d3a3a92;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  transform: translateX(100%);
  transition: transform 300ms linear;
  transform: ${(p) => (p.$isOpenMenu ? "translateX(0%)" : "")};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #5009d2fc;

    transform: translateX(0%);

    transition: ${(p) => (!p.$isDelete ? "transform 3000ms linear" : "")};

    transform: ${(p) => (p.$isDelete ? "translateX(100%)" : "")};
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 6px;
  left: 6px;

  width: 26px;
  height: 26px;
  padding: 18px;
  border-radius: 50%;

  background-color: white;

  @media ${(p) => p.theme.media.medium} {
    padding: 0;
  }
`;
