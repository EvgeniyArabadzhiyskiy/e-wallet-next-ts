"use client";

import styled from 'styled-components';
import { CommonStyle } from '../HomeTableDesctop/HomeTableDesctop.styled';

export const StyledItem = styled.li`
  ${CommonStyle};
  position: relative;
  overflow: hidden;

  height: 52px;

  
    border-bottom: 1px solid #dcdcdf;
  

  p {
    &:nth-child(4) {
      padding-right: 32px;
    }
  }
`;