"use client";

import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

import { useStatistic } from "@/src/apiWallet";
import { useUserBalance } from "@/src/apiWallet";
import { getChartData } from "@/src/helpers/getChartData";
import { getStatsResult } from "@/src/helpers/getStatsResult";
import { createCenterTextPlugin } from "@/src/helpers/createCenterTextPlugin";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
// console.log("ChartJS:", ChartJS.defaults.plugins.title);

function Chart() {
  const { data: statistic = [] } = useStatistic();
  const result = getStatsResult(statistic);
  const data = getChartData(result);

  const { data: totalBalance = 0 } = useUserBalance();
  const centerTextPlugin = useMemo(() => {
    return createCenterTextPlugin(totalBalance);
  }, [totalBalance]);

  return (
    <>
      <Doughnut
        data={data}
        options={{ cutout: "70%", plugins: { legend: { display: false } } }}
        plugins={[centerTextPlugin]}
      />
    </>
  );
}

export default Chart;
