"use client";

import { Container, CurrencySign, Text, Title } from "./Balance.styled";

export default function Balance() {
  // const { data: totalBalance = 0 } = useGetBalanceQuery();

  return (
    <Container>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{100}</Text>
    </Container>
  );
}
