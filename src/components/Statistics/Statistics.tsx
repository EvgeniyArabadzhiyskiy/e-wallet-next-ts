"use client";

import { useStatistic } from "@/src/apiWallet/useStatistic";
import StatTable from "./StatTable";

import { ChartWrapper, PageTitle, TableWrapper } from "./Statistics.styled";
import Chart from "../Chart/Chart";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import StatisticLoader from "../StatisticLoader";

function Statistics() {
  const { data, year, month, setMonth, setYear, expensesData, expensesTotal, incomeTotal, isFetching } =
  useStatistic();
  // console.log("Statistics  data:", data);
  // console.log("Statistics  year:", year);
  
    const client = useQueryClient()
    const stat = client.getQueriesData(['Statistics'])
    const tranList = client.getQueriesData(['TransactionsList'])
    const tran = client.getQueriesData(['Transactions'])
    // console.log("Transactions", tran);
    // console.log("TransactionsList", tranList[0]);
    // console.log("Statistics:", stat); 

    if (isFetching) {
      return <StatisticLoader />
    }

  return (
    <div>
      {/* <br/>
      <Link style={{color: "white"}} href="/about">About</Link>
      <br/> */}
      <PageTitle>Statistics</PageTitle>
      <TableWrapper>
        <ChartWrapper>
          {/* safgsd */}
          {/* <Circle /> */}
          {<Chart statistic={data} /> }
          </ChartWrapper>
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
