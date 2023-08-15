"use client";

import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, ChartData } from "chart.js";

import { useStatistic } from "@/src/apiWallet";
import { useUserBalance } from "@/src/apiWallet";
import { getChartData } from "@/src/helpers/getChartData";
import { getStatsResult } from "@/src/helpers/getStatsResult";
import { createCenterTextPlugin } from "@/src/helpers/createCenterTextPlugin";
import { IStatistic } from "@/src/types/statistics";
import { DoughnutWrapper } from "./Chart.styled";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
// console.log("ChartJS:", ChartJS.defaults.plugins.title);

interface IProps {
  statistic: IStatistic[];
}

function Chart({ statistic }: IProps) {
  const result = getStatsResult(statistic);
  const data = getChartData(result);

  const { data: totalBalance = 0 } = useUserBalance();
  const centerTextPlugin = useMemo(() => {
    return createCenterTextPlugin(totalBalance);
  }, [totalBalance]);

  return (
    <DoughnutWrapper>
      <Doughnut
        data={data}
        options={{
          cutout: "70%",
          aspectRatio: 1,
           plugins: {
            legend: {
              display: false
            },
            tooltip: {
              padding: 18,
              titleColor: "#10b981",
              titleFont: {
                size: 16,
              },
              bodyFont: {
                size: 14
              }
            }
          } }}
        plugins={[centerTextPlugin]}
      />
    </DoughnutWrapper>
  );
}

export default Chart;
