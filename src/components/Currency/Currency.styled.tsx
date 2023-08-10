"use client";

import styled from "styled-components";
import CurrencySvg from "../SvgComponent/CurencySvg";

export const CurrencyBox = styled.div`
  position: relative;
  /* width: 280px; */
  max-width: 280px;
  height: 174px;
  background: ${(p) => p.theme.colors.houseStat};
  border-radius: 30px;
  color: ${(p) => p.theme.colors.primaryBtn};
  margin: 0 auto;
  margin-top: 30px;

  @media ${(p) => p.theme.media.medium} {
    width: 336px;
    max-width: 336px;
    height: auto;
    margin: 0;
  }
  
  @media ${(p) => p.theme.media.large} {
    width: 393px;
    max-width: 393px;
    height: 347px;
    margin: 0;
  }
`;

export const PrivatTableList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  padding-top: 11px;
  padding-bottom: 12px;

  border-radius: 30px 30px 0 0;

  font-weight: ${(p) => p.theme.fontWeights.bold};
  background-color: ${(p) => p.theme.colors.childrenStat};
  font-size: ${(p) => p.theme.fontSizes.m};

  @media ${(p) => p.theme.media.medium} {
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${(p) => p.theme.media.large} {
    padding-left: 45px;
    padding-right: 64px;

    padding-top: 17px;
    padding-bottom: 17px;
  }
`;

export const CurrencyList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
  @media ${p => p.theme.media.large} {
    padding-top: 20px;
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const CurrencyItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 12px;

  @media ${p => p.theme.media.large} {
    padding-bottom: 24px;
  }
`;

export const TextTitle = styled.li`
  color: ${(p) => p.theme.colors.white};

  @media ${(p) => p.theme.media.medium} {
    &:nth-child(2) {
      margin-right: 35px;
    }
  }

  @media ${(p) => p.theme.media.large} {
    &:nth-child(2) {
      margin-right: 15px;
    }
  }
`;

export const Text = styled.p`
  color: #ffffff;
  @media ${p => p.theme.media.small} {
    &:nth-child(1) {
      margin-left: 5px;
    }
    &:nth-child(2) {
      margin-left: 20px;
    }
    &:nth-child(3) {
      margin-right: 5px;
    }
  }
`;

export const CurrencyVektor = styled(CurrencySvg)`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 93px;
  width: 100%;
  
  @media ${(p) => p.theme.media.medium} {
    height: 119px;
  }
  @media ${(p) => p.theme.media.large} {
    height: 134px;
  }
`;
