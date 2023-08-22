import { getBalance } from "@/src/apiWallet/balance";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import LoaderTransaction from "@/src/components/TransactionLoader";
import TransactionTable from "@/src/components/TransactionTable/TransactionTable";
import WrapperTransaction from "@/src/components/WrapperTransaction";
import { authOptions } from "@/src/lib/auth";
import getQueryClient from "@/src/lib/getQueryClient";
import { Hydrate,  dehydrate } from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import { Suspense } from "react";


export default  function PageTransactions() {
  //   await new Promise((res) =>
  //   setTimeout(() => res(console.log("Promise resolve")), 4000)
  // );
  // const session = await getServerSession(authOptions);
  // const authToken = session?.token;

  // const queryClient = getQueryClient();

  // if (authToken) {
  //   const balanceQuery = queryClient.prefetchQuery(["Balance"], () =>
  //     getBalance(authToken)
  //   );

  //   const transactionsQuery = await queryClient.prefetchInfiniteQuery({
  //     queryKey: ["TransactionsList"],
  //     queryFn: ({ pageParam = 1 }) =>
  //       getAllTransactions(authToken, pageParam),
        
  //   });
    
  // }

  // const dehydratedState = dehydrate(queryClient);

  return (
    <>
      {/* <Hydrate state={dehydratedState}>
        <TransactionTable />
      </Hydrate> */}

      <Suspense fallback={<LoaderTransaction />}>
        <WrapperTransaction />
      </Suspense>
    </>
  );
}
