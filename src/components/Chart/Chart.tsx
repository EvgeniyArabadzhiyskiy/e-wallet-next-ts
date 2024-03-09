"use client";

import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

import { IStatistic } from "@/src/types/statistics";
import { useUserBalance } from "@/src/apiWallet";
import { getChartData } from "@/src/helpers/getChartData";
import { getStatsResult } from "@/src/helpers/getStatsResult";
import { doughnutOptions } from "@/src/helpers/doughnutOptions";
import { createCenterTextPlugin } from "@/src/helpers/createCenterTextPlugin";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
// console.log("ChartJS:", ChartJS.defaults.plugins.title);

interface IProps {
  statistic: IStatistic[] | undefined;
}

function Chart({ statistic = [] }: IProps) {
  const { data: totalBalance = 0 } = useUserBalance();
  const centerTextPlugin = useMemo(() => {
    return createCenterTextPlugin(totalBalance);
  }, [totalBalance]);

  // if (!statistic) {
  //   return null;
  // }

  const result = getStatsResult(statistic);
  const data = getChartData(result);

  return (
    <Doughnut
      data={data}
      options={doughnutOptions}
      plugins={[centerTextPlugin]}
    />
  );
}

export default Chart;
