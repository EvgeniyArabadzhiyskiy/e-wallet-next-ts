// "use client";

import Link from "next/link";
import Statistic from "@/src/components/Statistic/Statistic";
import { useSession } from "next-auth/react";
import { Hydrate, dehydrate, useQuery } from "@tanstack/react-query";
import { parseCookies } from "nookies";
import TransactionList from "@/src/components/TransactionList/TransactionList";
import { cookies } from "next/headers";
import getQueryClient from "@/src/lib/getQueryClient";
import { getUser } from "@/src/helpers/getUser";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import Header from "@/src/components/Header/Header";
import ModalBox from "@/src/components/ModalBox";
import ModalLogOut from "@/src/components/ModalLogOut/ModalLogOut";

const getAllTransactions = async (authToken: any, pageNum: number) => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const TRANSACTIONS = "/transactions";

  // const { authToken } = parseCookies();

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const resFetch = await fetch(
    `${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`,
    options
  );
  const transactions = (await resFetch.json()) as any;

  return transactions;
};

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const authToken = session?.user.token;
  // console.log("HomePage  authToken>>>>>>>>>>>>>>>>>>>>>>>>>>>>", authToken);

  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["Transactions", 1], () =>
  //   getAllTransactions(authToken, 1)
  // );
  // const dehydratedState = dehydrate(queryClient);


  return (
    <>
      {/* <Hydrate state={dehydratedState}> */}
        {/* <Header currentUser={session} /> */}
        <TransactionList authToken={authToken} />

        {/* <ModalBox modalName="logout">
          <ModalLogOut />
        </ModalBox> */}
      {/* </Hydrate> */}
    </>
  );
}

// export default function HomePage() {
//   const session = useSession();
//   const authToken = session.data?.user.token;

//   const { data } = useQuery({
//     queryKey: ["transactions"],
//     queryFn: () => getAllTransactions(authToken),
//     staleTime: Infinity,
//     refetchOnWindowFocus: false,
//     enabled: !!authToken,
//   });

//   return (
//     <>
//       <h1>HOME PAGE</h1>
//       <Link href="/">HOME</Link>
//       {data &&
//         data.transactions.map((item: any) => {
//           return <li key={item._id}>{item.category}</li>;
//         })}
//     </>
//   );
// }

// const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
//   const {results} = await res.json()
//   console.log("============================================results", results);
