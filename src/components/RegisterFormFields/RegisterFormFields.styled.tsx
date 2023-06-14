"use client"

import styled from 'styled-components';
import { changeAfterLineColor, changeAfterLineWidth, changeMainLineColor } from '@/src/helpers/passwordIndicators';

export const PasswordIndicator = styled.div<{ length: string }>`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${p => changeMainLineColor(p.length)};

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: ${p => changeAfterLineWidth(p.length)};
    height: 4px;
    border-radius: 2px;
    background-color: ${p => changeAfterLineColor(p.length)};
  }
`;