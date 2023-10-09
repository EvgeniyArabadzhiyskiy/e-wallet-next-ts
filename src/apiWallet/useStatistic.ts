import { useMemo, useState } from "react";
import { useUser } from "../hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "./statistic";
import { IStatistic } from "../types/statistics";

export const useStatistic = () => {
  const { token } = useUser();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const queryData = useQuery<IStatistic[], Error, IStatistic[]>({
    queryKey: ["Statistics", { month, year }],
    queryFn: () => getStatistics(token, { month, year }),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!token,
  });

  const { data = [] } = queryData;

  const expensesData = useMemo(
    () => data.filter(({ type }) => type === "expense"),
    [data]
  );

  const expensesTotal = useMemo(
    () => expensesData.reduce((acc, item) => acc + item.totalSum, 0),
    [expensesData]
  );

  const incomeTotal = useMemo(() => data
    .filter(({ type }) => type === "income")
    .reduce((acc, item) => acc + item.totalSum, 0),
    [data]
  );

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
