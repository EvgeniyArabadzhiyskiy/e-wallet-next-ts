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

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 300px;
  height: 400px; */
  /* background-color: #ffffff; */
`;
