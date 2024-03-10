import Balance from "../Balance/Balance";
import getQueryClient from "@/src/lib/getQueryClient";

import { getUserID } from "@/src/helpers/getUserID";
import { getBalance } from "@/src/apiWallet/balance";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { prismaControllerWrapper } from "@/src/helpers/prismaControllerWrapper";

async function BalanceComponentWrapper() {
  const userID = await getUserID();

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [["transactionRouter", "getBalance"], { type: "query" }],
    queryFn: () => prismaControllerWrapper(() => getBalance(userID)),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Balance />
    </Hydrate>
  );
}

export default BalanceComponentWrapper;
