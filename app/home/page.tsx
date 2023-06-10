"use client";

import Link from "next/link";
import Statistic from "@/components/Statistic/Statistic";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

const getAllTransactions = async (authToken: any) => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const TRANSACTIONS = "/transactions";

  // const { authToken } = parseCookies();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const resFetch = await fetch(`${BASE_URL}${TRANSACTIONS}`, options);
  const user = (await resFetch.json()) as any;

  return user;
};

export default function HomePage() {
  const session = useSession();
  const authToken = session.data?.user.token;
  // console.log("HomePage  authToken:", authToken);

  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => getAllTransactions(authToken),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!authToken,
  });
  // console.log("HomePage  data:", data);

  return (
    <>
      <h1>HOME PAGE</h1>
      <Link href="/">HOME</Link>
      {data &&
        data.transactions.map((item: any) => {
          return <li key={item._id}>{item.category}</li>;
        })}
    </>
  );
}

// const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
//   const {results} = await res.json()
//   console.log("============================================results", results);
