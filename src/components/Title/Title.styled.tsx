"use client";

import styled from "styled-components";
import { Box } from "../Box/Box";

export const Title = styled(Box)`
  /* font-size: 20px; */
  color: ${p => p.theme.colors.childrenStat} ;
  font-weight: var(--normal) ;
`;
