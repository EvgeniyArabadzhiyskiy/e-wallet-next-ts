"use client";

import styled from "styled-components";
import { baseBtnStyle } from "../Buttons/DefaultButton.styled";

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

// export const DeleteBtn = styled.button`
//   width: 100px;
//   height: 40px;
//   font-size: 16px;
//   border: 7px solid rgba(55, 53, 53, 0.4);
//   color: ${(p) => p.theme.colors.primaryBg};
//   background-color: ${(p) => p.theme.colors.primaryBgBtn};

//   cursor: pointer;
//   text-transform: uppercase;
// `;



export const SettingBtn = styled.button`
  background: transparent;

  svg {
    display: block;
    transition: fill 250ms linear;
  }

  svg:hover {
    fill: ${(p) => p.theme.colors.primaryBgBtn};
  }
`;

export const CloseBtn = styled(SettingBtn)`
  position: absolute;
  top: 6px;
  left: 6px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
`;
