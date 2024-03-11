"use client";

import { useStatistic } from "@/src/apiWallet/useStatistic";

import Chart from "../Chart/Chart";
import StatTable from "./StatTable";
import StatisticLoader from "../StatisticLoader";
import { ChartWrapper, PageTitle, TableWrapper } from "./Statistics.styled";

function Statistics() {
  const {
    data,
    year,
    month,
    setMonth,
    setYear,
    expensesData,
    expensesTotal,
    incomeTotal,
    isFetching,
    error,
    isError,
  } = useStatistic();

  if (isError) {
    throw new Error(error.message);
  }
  if (isFetching) {
    return <StatisticLoader />;
  }

  return (
    <div>
      <PageTitle>Statistics</PageTitle>
      <TableWrapper>
        <ChartWrapper>{<Chart statistic={data} />}</ChartWrapper>
        <StatTable
          month={month}
          year={year}
          setMonth={setMonth}
          setYear={setYear}
          expensesData={expensesData}
          expensesTotal={expensesTotal}
          incomeTotal={incomeTotal}
        />
      </TableWrapper>
    </div>
  );
}

export default Statistics;
