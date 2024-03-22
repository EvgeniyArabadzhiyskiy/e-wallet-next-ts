import TransactionTable from "../TransactionTable";
import getQueryClient from "../../lib/getQueryClient";
import { getBalance } from "../../apiWallet/balance";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getAllTransactions } from "../../apiWallet/transaction";

import { getUserID } from "@/src/helpers/getUserID";
import { prismaControllerWrapper } from "@/src/helpers/prismaControllerWrapper";

async function TransactionWrapper() {
 
  const userID = await getUserID();

  const queryClient = getQueryClient();

  const balanceQuery = queryClient.prefetchQuery({
    queryKey: [['transactionRouter', 'getBalance'], { type: "query" }], 
    queryFn: () => prismaControllerWrapper(() => getBalance(userID)),
  });

  const transactionsQuery = queryClient.prefetchInfiniteQuery({
    queryKey: [['transactionRouter', 'getAllTransactions'], { input: { limit: 10 }, type: "infinite" }],
    queryFn: () => prismaControllerWrapper(() => getAllTransactions(userID)),
  });

  await Promise.allSettled([balanceQuery, transactionsQuery]);
  
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <TransactionTable />
    </Hydrate>
  );
}

export default TransactionWrapper;
