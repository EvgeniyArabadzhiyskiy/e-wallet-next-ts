import { trpc } from "../trpc/client";
import { useMemo, useState } from "react";

export const useStatistic = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");

  const queryData = trpc.statisticRouter.getStatistic.useQuery(
    { month, year },
    { queryKey: ["statisticRouter.getStatistic", { month, year }]},
  );

  const { data = [] } = queryData;

  const expensesData = data.filter(({ type }) => {
    return type === "expense";
  });

  const expensesTotal = useMemo(
    () => expensesData.reduce((acc, item) => acc + item.totalSum, 0),
    [expensesData]
  );

  const incomeTotal = useMemo(
    () =>
      data
        .filter(({ type }) => type === "income")
        .reduce((acc, item) => acc + item.totalSum, 0),
    [data]
  );

  const result = useMemo(() => {
    return {
      ...queryData,
      year,
      setYear,
      month,
      setMonth,
      expensesData,
      expensesTotal,
      incomeTotal,
    };
  }, [year, month, expensesData, expensesTotal, incomeTotal]);

  return result;
};
