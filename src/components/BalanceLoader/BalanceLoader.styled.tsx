"use client"

import styled, {keyframes} from "styled-components"

const loadingAnimation = keyframes`
  0% {
    background-position: 0% 0;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const Wrapper = styled.div`
  height: 80px;
  margin-bottom: 32px;
  padding: 8px 40px;
  border-radius: 10px;
  border: 2px solid #10b981;

  color: #a1a1aa;
  background-color: #111827;

  @media ${p => p.theme.media.mediumToLarge} {
    width: 336px;
    margin-bottom: 0;
  }
  
  @media ${p => p.theme.media.large} {
    width: 395px;
  }
`;

export const Title = styled.p`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;

  color: ${p => p.theme.palette.text.secondaryText};
  text-transform: uppercase;
`;

export const Text = styled.span`
  font-family: ${p => p.theme.fonts.poppins};
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.5;

  color: white;
`;

export const Loader = styled.div`
  width: 140px;
  height: 39px;

  background: linear-gradient(to left, #6e6f71, #fafafa);
  background-size: 200% 100%;
  
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  filter: blur(4px);
  animation: ${loadingAnimation} 1s ease infinite;

 
`;