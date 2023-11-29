"use client";
import styled from "styled-components";

interface IColorSpanProps {
  category: string;
}

export const ColorSpan = styled.span.withConfig({
  shouldForwardProp: (prop) => {
    return !["category"].includes(prop);
  },
})<IColorSpanProps>`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-color: ${(p) => p.category};
`;

export const TableItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  border-bottom: 1px solid #10b981;
`;
