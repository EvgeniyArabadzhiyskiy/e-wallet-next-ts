"use client";

import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Title } from "../Title/Title.styled";
import { ITransaction, ITransactions } from "@/src/types/transactions";
import { isITransactions } from "@/src/helpers/isITransactions";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";

const getAllTransactions = async (authToken: any, pageNum: number) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(
      `${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`,
      options
    );
    const data = await response.json();

    if (!response.ok) {
      const errorMessage = response.statusText || "An error occurred";
      throw new Error(errorMessage);
    }

    if (!isITransactions(data)) {
      throw new Error("Invalid data format");
    }

    const transactions: ITransactions = data;

    return transactions;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message || "An error occurred");
  }
};

const TransactionList = ({ authToken }: { authToken?: string | undefined }) => {
  // const { authToken } = parseCookies();
  // const queryClient = useQueryClient();
  const [pageNum, setPageNum] = useState(1);
  const session = useSession();
  const userToken = session.data?.user.token;

  const { data, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["Transactions", pageNum],
    queryFn: () => getAllTransactions(userToken, pageNum), // ИЛИ authToken
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!userToken, // При authToken  Удалить
  });
  // console.log("TransactionList  error:", error);

  // console.log("HomePage  data:", data);

  //   const queryUserData = queryClient.getQueriesData<any>(["Transactions"]);
  //   console.log("Header  queryUserData:", queryUserData);

  if (isFetching) {
    return <h1>Loading Transactions...</h1>;
  }

  if (isError) {
    return (
      <>
        <h1>{(error as Error).message}</h1>
        <button onClick={() => refetch()}>Retry</button>
      </>
    );
  }

  return (
    <>
      <h1>HOME PAGE</h1>
      <Title>Title</Title>
      <Link href="/">HOME</Link>
      <button type="button" onClick={() => setPageNum((p) => p + 1)}>
        Next Page
      </button>
      <ul>
        {data &&
          data?.transactions?.map((item: any) => {
            return <li key={item._id}>{item.category}</li>;
          })}
      </ul>
    </>
  );
};

export default TransactionList;

// type Species = "cat" | "dog";

// interface Pet {
//   species: Species
// }

// interface Cat extends Pet {

// }

// function petIsCat(pet: Pet): pet is Cat {
//   return pet.species === "cat";
// }
// console.log("petIsCat  petIsCat:", petIsCat({
//   species: 'dog'
// }));

interface Pet {
  species: string;
  name: string;
}

// function petIsCat(pet: any): pet is Pet {
//   return 'species' in pet || 'name' in pet
// }
// console.log("petIsCat  petIsCat:", petIsCat({
//   species: 'dog'
// }));

// function getBonusSalary(balance: number) {
//   return balance * 10 - 200;
// }

// const bonus = getBonusSalary(transactions.userBalance);
