"use client";

import styled from "styled-components";
import Link from "next/link";

export const LogoBox = styled.div`
  font-family: ${(p) => p.theme.fonts.headingBold};
  font-size: ${(p) => p.theme.fontSizes.l};

  @media ${(p) => p.theme.media.small} {
    font-size: 23px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin-right: 16px;

  @media ${(p) => p.theme.media.medium} {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const LogoWallet = styled.img`
  margin-right: 16px;
  /* display: block;
  width: 100%;
  height: auto; */

  @media ${(p) => p.theme.media.medium} {
    margin-right: 20px;
  }
`;

export const LogoLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
`;



export const LogoText = styled.span<{ $isLoginPage: boolean }>`
  color: ${(p) =>
    p.$isLoginPage ? p.theme.colors.white : p.theme.colors.primaryText};
`;


// export const LogoText = styled(({ isLoginPage, ...props }: {isLoginPage: boolean}) => <span {...props} />)`
//   color: ${(p) => p.isLoginPage ? p.theme.colors.white : p.theme.colors.primaryText};
// `;