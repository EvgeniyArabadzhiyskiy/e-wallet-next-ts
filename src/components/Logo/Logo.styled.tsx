"use client";

import styled from "styled-components";

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const ImgWrapper = styled.div`
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

export const LogoText = styled.span<{ $isLoginPage: boolean }>`
  font-family: ${(p) => p.theme.fonts.poppins};
  font-size: 23px;
  font-weight: 700;

  @media ${(p) => p.theme.media.medium} {
    font-size: 30px;
  }

  color: ${(p) =>
    p.$isLoginPage ? p.theme.colors.white : p.theme.colors.primaryText};
`;

// export const LogoText = styled(({ isLoginPage, ...props }: {isLoginPage: boolean}) => <span {...props} />)`
//   color: ${(p) => p.isLoginPage ? p.theme.colors.white : p.theme.colors.primaryText};
// `;
