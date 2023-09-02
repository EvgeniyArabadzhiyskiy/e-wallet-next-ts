"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useStatistic } from "@/src/apiWallet/useStatistic";

import Link from "next/link";
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
    isError
  } = useStatistic();

  const client = useQueryClient();
  const stat = client.getQueriesData(["Statistics"]);
  const tranList = client.getQueriesData(["TransactionsList"]);
  const tran = client.getQueriesData(["Transactions"]);
  // console.log("Transactions", tran);
  // console.log("TransactionsList", tranList[0]);
  // console.log("Statistics:", stat);

  if (isError) {
    throw new Error(error.message)
  }
  if (isFetching) {
    return <StatisticLoader />;
  }

  return (
    <div>
      {/* <br/>
      <Link style={{color: "white"}} href="/about">About</Link>
      <br/> */}
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
