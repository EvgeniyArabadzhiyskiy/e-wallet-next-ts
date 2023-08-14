"use client";

import { useStatistic } from "@/src/apiWallet/useStatistic";
import StatTable from "./StatTable/StatTable";

import stl from "../../app/home/statistic/page.module.scss";
import { ChartWrapper, PageTitle, TableWrapper } from "./Statistics.styled";
import Chart from "../Chart/Chart";
import { useQueryClient } from "@tanstack/react-query";

function Statistics() {
  const { setMonth, setYear, expensesData, expensesTotal, incomeTotal } =
    useStatistic();

    const client = useQueryClient()
    const stat = client.getQueriesData(['Statistics'])
    console.log("Statistics  stat:", stat);

  return (
    <div>
      <PageTitle>Statistics</PageTitle>
      <TableWrapper>
        <ChartWrapper>{<Chart /> }</ChartWrapper>
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
