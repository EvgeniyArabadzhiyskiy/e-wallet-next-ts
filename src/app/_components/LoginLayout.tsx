"use client"

import React from "react";
import { Container, Section, Wrapper } from "./LoginLayout.styled";

export default function LoginLayaut({children}: {children: React.ReactNode}) {
  return (
    <Section>
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </Section>
  );
}
