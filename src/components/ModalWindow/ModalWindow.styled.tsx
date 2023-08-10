"use client";

import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2a2c2d67;
  z-index: 10;
`;

export const Modal = styled.div<{ $maxHeight?: string; $overflow?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
`;
