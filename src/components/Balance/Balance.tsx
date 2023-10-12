"use client";

import { useUserBalance } from "@/src/apiWallet";
import { Wrapper, Text, Title } from "./Balance.styled";

export default function Balance() {
  const { data = 0 } = useUserBalance();

  return (
    <Wrapper>
      <Title>Your balance</Title>
      <Text>{data.toFixed(2)}</Text>
    </Wrapper>
  );
}
