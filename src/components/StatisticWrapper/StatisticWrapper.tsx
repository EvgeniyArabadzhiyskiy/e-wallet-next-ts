import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import { Hydrate, dehydrate } from "@tanstack/react-query";

import Statistics from "../Statistics/Statistics";
import { getBalance } from "../../apiWallet/balance";
import getQueryClient from "../../lib/getQueryClient";
import { getStatistics } from "@/src/apiWallet/statistic";

async function StatisticWrapper() {
  const session = await getServerSession(authOptions);
  const authToken = session?.token;

  const queryClient = getQueryClient();

  if (authToken) {
    const balanceQuery = queryClient.prefetchQuery(["Balance"], () =>
      getBalance(authToken)
    );

    const statisticsQuery = queryClient.prefetchQuery({
      queryKey: ["Statistics", { month: "", year: "" }],
      queryFn: () => getStatistics(authToken, { month: "", year: "" }),
    });

    await Promise.allSettled([balanceQuery, statisticsQuery]);
  }

  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <Statistics />
    </Hydrate>
  );
}

export default StatisticWrapper;
