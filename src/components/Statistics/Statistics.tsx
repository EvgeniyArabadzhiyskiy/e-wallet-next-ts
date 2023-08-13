"use client";

import { useUser } from "@/src/hooks/useUser";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableFooter,
//   TableHeader,
//   FooterText,
//   TableFooterItem,
// } from "./Statistics.styled";
import { getCategoryColor } from "@/src/helpers/getCategoryColor";
import StatItem from "./StatItem";
import { getStatistics } from "@/src/apiWallet/statistic";
import { IColor } from "@/src/types/statistics";
import { useStatistic } from "@/src/apiWallet/useStatistic";
import FilterDate from "../FilterDate/FilterDate";
import TestServerComponent from "../TestServerComponent";
import StatTable from "./StatTable/StatTable";

import stl from "../../app/home/statistic/page.module.scss";
import { ChartWrapper, PageTitle, TableWrapper } from "./Statistics.styled";
import Chart from "../Chart/Chart";

function Statistics() {
  const { data = [], setMonth, setYear, expensesData, expensesTotal, incomeTotal } =
    useStatistic();

    // const client = useQueryClient()
    // const stat = client.getQueriesData(['Statistics'])
    // console.log("Statistics  stat:", stat);

  return (
    <>
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
    </>
  );
}

export default Statistics;
