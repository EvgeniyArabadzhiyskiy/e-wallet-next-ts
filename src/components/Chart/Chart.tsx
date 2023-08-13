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
//   const data = getChartData(result);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



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