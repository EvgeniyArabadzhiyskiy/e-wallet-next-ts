"use client";

import { useQueryClient } from "@tanstack/react-query";
import { Wrapper, CurrencySign, Text, Title } from "./Balance.styled";
import { useUserBalance } from "@/src/apiWallet";

export default function Balance() {
  const { data = 0 } = useUserBalance();

  // const queryClient = useQueryClient();
  // const Balance = queryClient.getQueriesData<any>(["Balance"]);
  // console.log(" Balance:", Balance[0]);

  return (
    <Wrapper>
      <Title>Your balance</Title>
      {/* <CurrencySign>₴ </CurrencySign> */}
      <Text>{data.toFixed(2)}</Text>
    </Wrapper>
  );
}
