"use client";

import { useStatistic } from "@/src/apiWallet/useStatistic";
import StatTable from "./StatTable";

import { ChartWrapper, PageTitle, TableWrapper } from "./Statistics.styled";
import Chart from "../Chart/Chart";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

function Statistics() {
  const { data, setMonth, setYear, expensesData, expensesTotal, incomeTotal } =
    useStatistic();

    const client = useQueryClient()
    const stat = client.getQueriesData(['Statistics'])
    const tranList = client.getQueriesData(['TransactionsList'])
    const tran = client.getQueriesData(['Transactions'])
    // console.log("Transactions", tran);
    // console.log("TransactionsList", tranList[0]);
    // console.log("Statistics:", stat); 

  return (
    <div>
      <br/>
      <Link style={{color: "white"}} href="/about">Statistic</Link>
      <br/>
      <PageTitle>Statistics</PageTitle>
      <TableWrapper>
        <ChartWrapper>{<Chart statistic={data} /> }</ChartWrapper>
        <StatTable
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
