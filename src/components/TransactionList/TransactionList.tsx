"use client";

import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useSession } from "next-auth/react";

const getAllTransactions = async (authToken: any, pageNum: number) => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const TRANSACTIONS = "/transactions";

  // const { authToken } = parseCookies();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  //   await new Promise(res => setTimeout(() => res(777), 5000))
  const resFetch = await fetch(
    `${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`,
    options
  );
  const transactions = (await resFetch.json()) as any;

  return transactions;
};

const TransactionList = ({ authToken }: { authToken?: string | undefined }) => {
  // const { authToken } = parseCookies();
  // const queryClient = useQueryClient();
  const [pageNum, setPageNum] = useState(1);
  const session = useSession();
  const userToken = session.data?.user.token;

  const { data, isFetching } = useQuery({
    queryKey: ["Transactions", pageNum],
    queryFn: () => getAllTransactions(userToken, pageNum), // ИЛИ authToken
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!userToken,  // При authToken  Удалить
  });
  // console.log("HomePage  data:", data);

  //   const queryUserData = queryClient.getQueriesData<any>(["Transactions"]);
  //   console.log("Header  queryUserData:", queryUserData);

  if (isFetching) {
    return <h1>Loading Transactions...</h1>;
  }

  return (
    <>
      <h1>HOME PAGE</h1>
      <Link href="/">HOME</Link>
      <button type="button" onClick={() => setPageNum(p => p + 1)}>Next Page</button>

      {data &&
        data?.transactions?.map((item: any) => {
          return <li key={item._id}>{item.category}</li>;
        })}
    </>
  );
};

export default TransactionList;
