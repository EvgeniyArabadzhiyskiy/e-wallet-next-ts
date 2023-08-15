"use client";

import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 280px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 160px;
    margin-bottom: 0px;
  }
`;

export const Filter = styled.input`
  padding-left: 20px;
  font-size: 18px;
  height: 50px;
  width: 100%;
  /* border-radius: 30px; */
  border-radius: 10px;
  color: #a1a1aa;
  background-color: #111827;
 


  outline: none;
  border: none;
  /* border: 1px solid black; */
  border: 2px solid #10b981;
  transition: border 250ms linear;

  &:hover {
    border: 2px solid #24cca7;
  }

  &:focus {
    border: none;
    outline: 2px solid #24cca7;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 16px;
  right: 25px;
  background-color: transparent;
  cursor: pointer;
`;
