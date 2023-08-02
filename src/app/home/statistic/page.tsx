"use client"

import { getAllTransactions } from "@/src/apiWallet/transaction";
import TransactionTable from "@/src/components/TransactionTable/TransactionTable";
import { BASE_URL, TRANSACTIONS } from "@/src/constants/apiPath";
import { useUser } from "@/src/hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageStatistic() {
  // const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTM0ZGFhMTQyNGVhZDExNWVhNTJhNSIsImlhdCI6MTY5MDM1ODM2NiwiZXhwIjoxNjkxNTY3OTY2fQ.cedmiiWsmHW_6KwfwPPN8fpdoVTnGtEqC5Fq7SB_Cvo'
    const options: RequestInit = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      // cache: "no-store",
    };

      fetch(`${BASE_URL}${TRANSACTIONS}?page=1&limit=10`, options).then(data => data.json()).then(data => {

      // console.log("fetch  data:", data);
      // setTransactions(data.transactions)
    })
  },[])

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

  // useEffect(() => {
  //   console.log("useEffect");

  //   return () => {
  //     console.log("Unmount");
  //   };
  // },);

  console.log("Rerender");
  return (
    <>
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
