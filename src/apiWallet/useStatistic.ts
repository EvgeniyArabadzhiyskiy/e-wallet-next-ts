import { useMemo, useState } from "react";
import { useUser } from "../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "./statistic";
import { IStatistic } from "../types/statistics";
import { trpc } from "../trpc/client";

export const useStatistic = () => {
  const { token } = useUser();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const queryData = trpc.statisticRouter.getStatistic.useQuery({month, year}, {
    // queryKey: ["statisticRouter.getStatistic", undefined],
    // cacheTime: 0,
  
  })

  // const queryData = useQuery<IStatistic[], Error, IStatistic[]>({
  //   queryKey: ["Statistics"],
  //   queryFn: async () => {
  //     const res = await fetch("/api/statistic");
  //     const data = await res.json()
  //     console.log("queryFn:  data:", data);

  //     return data
  //   },
  //   cacheTime: 0,
  //   // staleTime: Infinity,
  //   // refetchOnWindowFocus: false,
  //   // retry: 0,
    
  // });

 

  const { data = [] } = queryData;

  // const expensesData = useMemo(
  //   () => data.filter(({ type }) => type === "expense"),
  //   [data]
  // );

  // const expensesTotal = useMemo(
  //   () => expensesData.reduce((acc, item) => acc + item.totalSum, 0),
  //   [expensesData]
  // );

  // const incomeTotal = useMemo(() => data
  //   .filter(({ type }) => type === "income")
  //   .reduce((acc, item) => acc + item.totalSum, 0),
  //   [data]
  // );

  const expensesData =  data.filter(({ type }) => type === "expense");
  const expensesTotal = expensesData.reduce((acc, item) => acc + item.totalSum, 0);

  const incomeTotal = data
  .filter(({ type }) => type === "income")
  .reduce((acc, item) => acc + item.totalSum, 0);

  

  const result = {
    ...queryData,
    year,
    setYear,
    month,
    setMonth,
    expensesData,
    expensesTotal,
    incomeTotal,
  };

  return result;
};
