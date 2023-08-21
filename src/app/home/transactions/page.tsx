import { getBalance } from "@/src/apiWallet/balance";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import TransactionTable from "@/src/components/TransactionTable/TransactionTable";
import { authOptions } from "@/src/lib/auth";
import getQueryClient from "@/src/lib/getQueryClient";
import { ITransactions } from "@/src/types/transactions";
import { Hydrate, InfiniteData, dehydrate } from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

// import { QueryClient } from '@tanstack/react-query'
// import { cache } from 'react'

// const getQueryClientTransaction = cache(() => new QueryClient({
//   defaultOptions: {
//     queries: {
//       queryKey: ['TransactionsList'],
//       staleTime: Infinity,
//       refetchOnWindowFocus: false,
//     }
//   }
// }))

export default async function PageTransactions() {
  //   await new Promise((res) =>
  //   setTimeout(() => res(console.log("Promise resolve")), 4000)
  // );
  const session = await getServerSession(authOptions);
  const authToken = session?.token;

  const queryClient = getQueryClient();
  // const queryClient = getQueryClientTransaction();

  if (authToken) {
    // const balanceQuery = queryClient.prefetchQuery(["Balance"], () =>
    //   getBalance(authToken)
    // );

    const transactionsQuery = await queryClient.prefetchInfiniteQuery({
      queryKey: ["TransactionsList"],
      queryFn: ({ pageParam = 1 }) =>
        getAllTransactions(authToken, pageParam),
        
    });
    
    // await Promise.allSettled([ transactionsQuery]);

    //  queryClient.setQueryData<InfiniteData<ITransactions>>(["TransactionsList"], (prev) => {
    //   if (!prev) {
    //     return undefined;
    //   }
    //   return {
    //     ...prev,
    //     pageParams: [1]
    //   };
    // });

    // const transactionsList = queryClient.getQueriesData(['TransactionsList'])
    // console.log("TransactionList:===================", transactionsList[0]);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hydrate state={dehydratedState}>
        <TransactionTable />
      </Hydrate>

      {/* <Suspense fallback={<h1 style={{ color: "white" }}>SUSPENSE...</h1>}>
      </Suspense> */}
    </>
  );
}
