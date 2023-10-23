"use client";

import styled from "styled-components";

export const Card = styled.div`
  width: 95vw;
  max-width: 500px;
  height: 600px;
  perspective: 700px;

  @media ${(p) => p.theme.media.medium} {
    width: 540px;
    max-width: inherit;
  }
`;

export const InnerCard = styled.div<{$isFlipped: boolean}>`
  position: relative;
  height: 100%;
  width: 100%;
  border: 10px solid rgba(255, 255, 255, 0.2);
  transition: transform 1000ms;
  transform-style: preserve-3d;

  transform: ${(p) => p.$isFlipped ? "rotateY(180deg)" : ''};
`;

const CardFace = styled.div`
  padding: 20px 30px;
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  overflow: hidden;
  background: #020617;
  transform-style: preserve-3d;

  @media ${(p) => p.theme.media.medium} {
    padding: 36px 60px;
  }
`;

export const CardFront = styled(CardFace)``;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
`;
