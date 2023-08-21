import { getBalance } from "@/src/apiWallet/balance";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import TransactionTable from "@/src/components/TransactionTable/TransactionTable";
import { authOptions } from "@/src/lib/auth";
import getQueryClient from "@/src/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
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

    // const transactionsQuery = await queryClient.prefetchInfiniteQuery( ["TransactionsList"],
    //   ({pageParam = 1}) => {
    //     // console.log("PageTransactions  p:", pageParam);
    //     return getAllTransactions(authToken, pageParam)
    //   },
    // );
    
    // await Promise.allSettled([ transactionsQuery]);
  }

  // const dehydratedState = dehydrate(queryClient);

  return (
    <>
      {/* <Hydrate state={dehydratedState}> */}
        <TransactionTable />
      {/* </Hydrate> */}

      {/* <Suspense fallback={<h1 style={{ color: "white" }}>SUSPENSE...</h1>}>
      </Suspense> */}
    </>
  );
}
