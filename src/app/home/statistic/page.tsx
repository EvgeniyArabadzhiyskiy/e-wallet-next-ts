"use client";

import { useLazyTransactions } from "@/src/apiWallet";
import { getAllTransactions } from "@/src/apiWallet/transaction";
import TransactionTable from "@/src/components/TransactionTable/TransactionTable";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";
import { useUser } from "@/src/hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import stl from "./page.module.scss";
import StatTable from "@/src/components/StatTable";

export default function PageStatistic() {
  // const [pageNum, setPageNum] = useState(1);
  // const { data: allTransactions = [], listElem, observerElem  } = useLazyTransactions();

  

  // const { token } = useUser();

  //   const { data, isError, error, isFetching } = useQuery({
  //   queryKey: ["Transactions", 1],
  //   queryFn: () => getAllTransactions(token, 1),
  //   staleTime: Infinity,
  //   refetchOnWindowFocus: false,
  //   retry: 0,
  //   enabled: !!token,
  // });
  //   console.log("PageStatistic  data:", data);

  
  return (
    <>
      <h2 className={stl.stat__title}>Statistics</h2>
      <div className={stl.table__wrapper}>
        <div className={stl.chart__wrapper}>{/* <Chart /> */}</div>
        <StatTable />
      </div>

      {/* <TransactionTable /> */}
      {/* <Link href="/">HOME</Link>
      <h1>Page Statistic </h1>
      <div style={{height:250, backgroundColor: "green"}} ></div> */}
      {/* <button type="button" onClick={() => setPageNum((p) => p + 1)}>
        Click
      </button> */}
    </>
  );
}
