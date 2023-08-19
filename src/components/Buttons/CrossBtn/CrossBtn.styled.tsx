"use client"

import styled from "styled-components";

export const Button = styled.button`
  background: transparent;

  svg {
    display: block;
    transition: color 250ms linear;
  }

  svg:hover {
    color: #10b981
  }
`;