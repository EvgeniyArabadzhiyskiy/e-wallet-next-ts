"use client"

import { Section, Wrapper } from "@/app/_components/LoginPage.styled";
import Link from "next/link";
import { Text } from "./Statistic/Statistic.styled";
import Statistic from "./Statistic/Statistic";
import LoginForm from "./LoginForm/LoginForm";
import Container from "./Container/Container";

export default function WrapperLogin ({pokemons} : {pokemons?: any}) {

    return <>
    <Section>
      <Container>
        <Wrapper>
          <Link href="/">HOME</Link>
          <h1>Login Page</h1>

          {/* <Statistic pokemons={pokemons} /> */}

          <LoginForm />
        </Wrapper>
      </Container>
    </Section>
    </>
} 