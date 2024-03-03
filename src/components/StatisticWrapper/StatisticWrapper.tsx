import Statistics from "../Statistics/Statistics";
import getQueryClient from "../../lib/getQueryClient";
import { getUserID } from "@/src/helpers/getUserID";
import { getBalance } from "@/src/apiWallet/balance";
import { getStatistics } from "@/src/apiWallet/statistic";
import { Hydrate, dehydrate } from "@tanstack/react-query";

async function StatisticWrapper() {
  const userID = await getUserID();

  const queryClient = getQueryClient();

  const balanceQuery = queryClient.prefetchQuery({
    queryKey: [['transactionRouter', 'getBalance'], { type: "query" }],
    queryFn: () => getBalance(userID),
  });

  const statisticsQuery = queryClient.prefetchQuery({
    queryKey: [['statisticRouter', 'getStatistic'], { input: {month: '', year: ''}, type: "query" }],
    queryFn: () => getStatistics(userID),
  });

  await Promise.allSettled([balanceQuery, statisticsQuery]);
  
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Statistics />
    </Hydrate>
  );
}

export default StatisticWrapper;
