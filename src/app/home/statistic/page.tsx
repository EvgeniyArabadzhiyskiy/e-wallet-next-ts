"use client"
import { apiWallet } from "@/src/apiWallet/apiWallet";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageStatistic() {
  const [pageNum, setPageNum] = useState(1);

  const session = useSession();
  const userToken = session.data?.user.token;
  console.log("PageStatistic  userToken:", userToken);

    const { data, isError, error, isFetching } = useQuery({
    queryKey: ["Transactions", 1],
    queryFn: () => apiWallet.getAllTransactions(userToken, 1), 
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!userToken, 
  });
    console.log("PageStatistic  data:", data);


  useEffect(() => {
    console.log("useEffect");
    

    return () => {
      console.log("Unmount");
    };
  },);

  console.log("Rerender");
  return (
    <>
      <Link href="/">HOME</Link>
      <h1>Page Statistic </h1>
      <div style={{height:250, backgroundColor: "green"}} ></div>
      <button type="button" onClick={() => setPageNum((p) => p + 1)}>
        Click
      </button>
    </>
  );
}