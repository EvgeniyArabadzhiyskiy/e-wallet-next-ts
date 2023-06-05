"use client"

import styled from 'styled-components';
import Link from "next/link";

export const LogoBox = styled.div`
  font-family: ${p => p.theme.fonts.headingBold};
  font-size: ${p => p.theme.fontSizes.l};

  @media ${p => p.theme.media.small} {
    font-size: 23px;
  }
`;

export const LogoWallet = styled.img`
  margin-right: 16px;

  @media ${p => p.theme.media.medium} {
    margin-right: 20px;
  }
`;

export const LogoLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;

  
`;

export const LogoText = styled.span<{isloginpage: boolean}>`
  color: ${p =>
    p.isloginpage 
    ? 'red' 
    : 'blue'
  };
`;
