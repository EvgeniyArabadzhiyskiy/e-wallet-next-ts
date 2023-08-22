import getQueryClient from "@/src/lib/getQueryClient";
import Balance from "../Balance/Balance";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import stl from "./DashBoardLayout.module.scss";
import { getBalance } from "@/src/apiWallet/balance/getBalance";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { Hydrate, InfiniteData, dehydrate } from "@tanstack/react-query";
import Currency from "../Currency/Currency";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import { getStatistics } from "@/src/apiWallet/statistic";
import { Suspense } from "react";
import { ITransactions } from "@/src/types/transactions";
import WrapperBalance from "../WrapperBalance/WrapperBalance";
import BalanceLoader from "../BalanceLoader/BalanceLoader";

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);
  // const authToken = session?.token;

  // const queryClient = getQueryClient();

  // if (authToken) {
    // const balanceQuery = queryClient.prefetchQuery(["Balance"], () => getBalance(authToken));

    // const transactionsQuery = queryClient.prefetchInfiniteQuery({
    //   queryKey: ["TransactionsList"],
    //   queryFn: ({ pageParam = 1 }) =>
    //     getAllTransactions(authToken, pageParam),
    // });

    // const statisticsQuery = queryClient.prefetchQuery({
    //   queryKey: ["Statistics", { month: "", year: "" }],
    //   queryFn: () => getStatistics(authToken, { month: "", year: "" }),
    // });
    
    // await Promise.allSettled([balanceQuery ])

    // queryClient.setQueryData<InfiniteData<ITransactions>>(["TransactionsList"], (prev) => {
    //   if (!prev) {
    //     return undefined;
    //   }
    //   return {
    //     ...prev,
    //     pageParams: [1]
    //   };
    // });

  // }

  // const dehydratedState = dehydrate(queryClient);

  // const balance = queryClient.getQueriesData<any>(["Balance"]);
  // console.log("TransactionList  Balance:+++++++++++++++++++++++++++++++++++", balance);
  // console.log('++++++++++++++++++++++++++++++++++++++')
  

  return (
    // <Hydrate state={dehydratedState}>
      <div className={stl.section}>
        <Container>
          <div className={stl.wrapper}>
            <div className={stl.sidebar}>
              <div>
                <Navigation />
                <Suspense fallback={<BalanceLoader />}>
                  <WrapperBalance />
                </Suspense>
              </div>
              <Currency />
            </div>

              {children}
          </div>
        </Container>
      </div>
    // </Hydrate>
  );
}
