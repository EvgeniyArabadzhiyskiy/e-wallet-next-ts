import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useUserBalance } from "@/src/apiWallet";
import { IStatistic } from "@/src/types/statistics";
import { getStatsResult } from "@/src/helpers/getStatsResult";
import { getChartData } from "@/src/helpers/getChartData";
import { TitleBalance } from "./Chart.styled";
import { doughnutOptions } from "@/src/helpers/doughnutOptions";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  statistic: IStatistic[];
}

function Chart({ statistic }: IProps) {
  const { data: totalBalance = 0 } = useUserBalance();

  const result = getStatsResult(statistic);
  const data = getChartData(result);



  return (
    <>
      <Doughnut data={data}  />
      
      {/* <TitleBalance>₴{totalBalance}</TitleBalance> */}
    </>
  );
}

export default Chart;


// const data = {
//     labels: ["Red", "Blue", "Yellow"],
//     datasets: [
//       {
//         data: [300, 50, 100],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       },
//     ],
//   };


//   const options = {
//     cutoutPercentage: 70, // Управляет размером круга
//     tooltips: {
//       enabled: false,
//     },
//     elements: {
//       center: {
//         text: totalBalance.toString(), // Вставляем баланс
//         color: "#FF6384", // Цвет текста
//         fontStyle: "Arial", // Шрифт
//         sidePadding: 20, // Отступы
//       },
//     },
//   };