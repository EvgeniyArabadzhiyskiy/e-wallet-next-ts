"use client";

import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/src/hooks/useUser";
import { Wrapper, CurrencySign, Text, Title } from "./Balance.styled";
import { getBalance } from "@/src/helpers/getBalance";
import { useUserBalance } from "@/src/hooks/useUserBalance";

export default function Balance() {
  const { data } = useUserBalance();

  // if (isFetching) {
  //   return <h1>Loading</h1>
  // }

  return (
    <Wrapper>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{data}</Text>
    </Wrapper>
  );
}
