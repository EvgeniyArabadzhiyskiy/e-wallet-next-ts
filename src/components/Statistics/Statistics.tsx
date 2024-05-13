"use client";

import { useStatistic } from "@/src/apiWallet/useStatistic";

import Chart from "../Chart/Chart";
import StatTable from "./StatTable";
import StatisticLoader from "../StatisticLoader";
import { ChartWrapper, PageTitle, TableWrapper } from "./Statistics.styled";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePageTransition } from "@/src/hooks/useTimeLine";

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

  const tl = usePageTransition(state => state.pageTimeline);
  
  // useGSAP(() => {
  //   // gsap.fromTo("#transition-element",{ opacity: 0}, { opacity: 1, duration: 1});
  //   // gsap.fromTo("#transition-element",{ translateX: "-100%"}, { translateX: "0%"});

  //   tl?.add(gsap.to("#transition-element", { translateX: "100%", duration: 2}));
  // });

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
