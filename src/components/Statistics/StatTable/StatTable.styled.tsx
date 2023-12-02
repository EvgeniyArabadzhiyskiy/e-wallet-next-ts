"use cliemt";

import styled from "styled-components";

export const Table = styled.div`
  @media ${(p) => p.theme.media.medium} {
    width: 336px;
  }

  @media ${(p) => p.theme.media.large} {
    width: 395px;
    margin-left: 32px;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 58px;
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #10b981;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #a1a1aa;
`;

export const TableBody = styled.ul`
  padding: 0 20px;
  color: #a1a1aa;
  line-height: 1.5;
`;

export const TableFooter = styled.ul`
  margin: 0;

  font-size: 16px;
  font-weight: 700;
  color: #a1a1aa;
  line-height: 1.5;
`;

export const TableFooterItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`;

export const FooterText = styled.p<{$type: string}>`
  color: ${(p) => (p.$type === "expense" ? "#FF6596" : "#24CCA7")};
`;
