"use client";

import { useQuery } from "@tanstack/react-query";
import { Wrapper, CurrencySign, Text, Title } from "./Balance.styled";
import { useSession } from "next-auth/react";
import { BALANCE, BASE_URL } from "@/src/constants/apiPath";
import { fetcher } from "@/src/helpers/fetcher";

export const getBalance = async (
  authToken: string | undefined
): Promise<any> => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  try {
    const data = await fetcher<any>(`${BASE_URL}${BALANCE}`, options);

    // console.log("data:", data);
    return data;
  } catch (error) {
    console.log("Error:", (error as Error).message);
    throw error;
  }
};

export default function Balance() {
  const session = useSession();
  const userToken = session.data?.user.token;

  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["Balance"],
    queryFn: () => getBalance(userToken), // ИЛИ authToken
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!userToken,
  });

  // if (isFetching) {
  //   return <h1>Loading</h1>
  // }

  return (
    <Wrapper>
      <Title>Your balance</Title>
      <CurrencySign>₴ </CurrencySign>
      <Text>{data?.userBalance}</Text>
    </Wrapper>
  );
}
