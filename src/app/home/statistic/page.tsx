// "use client";

// import { useEffect, useState } from "react";

import { getBalance } from "@/src/apiWallet/balance";
import { getStatistics } from "@/src/apiWallet/statistic";
import Statistics from "@/src/components/Statistics";
import { authOptions } from "@/src/lib/auth";
import getQueryClient from "@/src/lib/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getServerSession } from "next-auth";

export default async function PageStatistic() {
  // const [pageNum, setPageNum] = useState(1);

  const session = await getServerSession(authOptions);
  const authToken = session?.token;

  const queryClient = getQueryClient();

  if (authToken) {
    // const balanceQuery = queryClient.prefetchQuery(["Balance"], () => getBalance(authToken));
    
    const statisticsQuery =  queryClient.prefetchQuery({
      queryKey: ["Statistics", { month: "", year: "" }],
      queryFn: () => getStatistics(authToken, { month: "", year: "" }),
    });

    await Promise.allSettled([ statisticsQuery])
  }

  

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hydrate state={dehydratedState}>
        <Statistics />
      </Hydrate>

      {/* <Link href="/">HOME</Link>
      <h1>Page Statistic </h1>
      <div style={{height:250, backgroundColor: "green"}} ></div> */}
      {/* <button type="button" onClick={() => setPageNum((p) => p + 1)}>
        Click
      </button> */}
    </>
  );
}
