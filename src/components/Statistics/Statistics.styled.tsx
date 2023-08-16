"use client";

import styled from "styled-components";

export const PageTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: white;
  margin: 20px 0;

  @media ${(p) => p.theme.media.large} {
    margin: 32px 0 20px 20px;
  }
`;

export const TableWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ChartWrapper = styled.div`
  position: relative;
  align-self: flex-start;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

// export const Table = styled.div`
//   @media ${(p) => p.theme.media.medium} {
//     width: 336px;
//   }

//   @media ${(p) => p.theme.media.large} {
//     width: 395px;
//   }
// `;

// export const TableHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   height: 58px;
//   padding: 15px 20px;
//   margin-bottom: 20px;
//   border-radius: 30px;

//   font-weight: 700;
//   font-size: 18px;
//   line-height: 1.5;

//   color: ${(p) => p.theme.colors.primaryText};
//   background-color: ${(p) => p.theme.colors.primaryBg};
// `;

// export const TableBody = styled.ul`
//   padding: 0 20px;
//   line-height: 1.5;
// `;

// export const TableFooter = styled.ul`
//   margin: 0;
//   border-radius: 10px;

//   font-size: 16px;
//   font-weight: 700;
//   line-height: 1.5;
// `;

// export const TableFooterItem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   padding: 12px 20px;
// `;

// export const FooterText = styled.p`
//   color: ${(p) => (p.type === "expense" ? "#FF6596" : "#24CCA7")};
// `;
