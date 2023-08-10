import getQueryClient from "@/src/lib/getQueryClient";
import Balance from "../Balance/Balance";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import stl from "./DashBoardLayout.module.scss";
import { getBalance } from "@/src/apiWallet/balance/getBalance";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import Currency from "../Currency/Currency";
import { getAllTransactions } from "@/src/apiWallet/transaction";

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const authToken = session?.token;

  const queryClient = getQueryClient();

  if (authToken) {
    await queryClient.prefetchQuery(["Balance"], () => getBalance(authToken));

    await queryClient.prefetchInfiniteQuery({
      queryKey: ["TransactionsList"],
      queryFn: ({ pageParam = 1 }) =>
        getAllTransactions(authToken, pageParam),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  // const balance = queryClient.getQueriesData<any>(["Balance"]);
  // console.log("TransactionList  Balance:+++++++++++++++++++++++++++++++++++", balance);

  return (
    <Hydrate state={dehydratedState}>
      <div className={stl.section}>
        <Container>
          <div className={stl.wrapper}>
            <div className={stl.sidebar}>
              <div>
                <Navigation />
                {session && <Balance />}
              </div>
              <Currency />
            </div>
            <div style={{width: 100, height: 800, background: "tomato"}} ></div>
            {children}
          </div>
        </Container>
      </div>
    </Hydrate>
  );
}
