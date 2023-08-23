import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import getQueryClient from "../../lib/getQueryClient";
import { getAllTransactions } from "../../apiWallet/transaction";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import TransactionTable from "../TransactionTable/TransactionTable";
import { getBalance } from "../../apiWallet/balance";

async function TransactionWrapper() {
  const session = await getServerSession(authOptions);
  const authToken = session?.token;

  const queryClient = getQueryClient();

  if (authToken) {
    const balanceQuery = queryClient.prefetchQuery(["Balance"], () =>
      getBalance(authToken)
    );

    const transactionsQuery = queryClient.prefetchInfiniteQuery({
      queryKey: ["TransactionsList"],
      queryFn: ({ pageParam = 1 }) => getAllTransactions(authToken, pageParam),
    });

    await Promise.allSettled([balanceQuery, transactionsQuery]);
  }

  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <TransactionTable />
    </Hydrate>
  );
}

export default TransactionWrapper;
