import getQueryClient from "@/src/lib/getQueryClient";
import Balance from "../Balance/Balance";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import stl from "./DashBoardLayout.module.scss";
import { getBalance } from "@/src/helpers/getBalance";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import { apiWallet } from "@/src/apiWallet/apiWallet";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import Currency from "../Currency/Currency";

export default async function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const authToken = session?.user.token;

  const queryClient = getQueryClient();

  if (authToken) {
    await queryClient.prefetchQuery(["Balance"], () => getBalance(authToken));

    await queryClient.prefetchInfiniteQuery({
      queryKey: ["TransactionsList"],
      queryFn: ({ pageParam = 1 }) =>
        apiWallet.getAllTransactions(authToken, pageParam),
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

            {children}
          </div>
        </Container>
      </div>
    </Hydrate>
  );
}
