import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
  LineController,
  BubbleController,
} from "chart.js";
import { useUserBalance } from "@/src/apiWallet";
import { IStatistic } from "@/src/types/statistics";
import { getStatsResult } from "@/src/helpers/getStatsResult";
import { getChartData } from "@/src/helpers/getChartData";
import { TitleBalance } from "./Chart.styled";
import { doughnutOptions } from "@/src/helpers/doughnutOptions";
import { faL } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle);
// ChartJS.defaults.plugins.tooltip.padding = 20;
// ChartJS.defaults.plugins.tooltip.position = 'nearest'
// ChartJS.defaults.plugins.title.text = "PLUGIN"
// ChartJS.defaults.plugins.title.color = 'orange'
console.log("ChartJS:", ChartJS.defaults.plugins);

interface IProps {
  statistic: IStatistic[];
}

function Chart({ statistic }: IProps) {
  const { data: totalBalance = 0 } = useUserBalance();

  const result = getStatsResult(statistic);
  const data = getChartData(result);


  const drawInnerText = (chart: any) => {
    const ctx = chart.ctx;
    ctx.restore();
    ctx.font = '700 18px Circe-Regular';
    ctx.textBaseline = 'middle';
    const text = `₴${totalBalance}`;
    const textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
    const textY = chart.height / 2 + chart.legend.height / 2;
    ctx.fillText(text, textX, textY);
    ctx.fillStyle = '#000000';
    ctx.save();
  };

  const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart: any) => {
        const ctx = chart.ctx;
        ctx.restore();
        ctx.font = '700 18px Circe-Regular';
        ctx.textBaseline = 'middle';
        const text = `₴${totalBalance}`;
        const textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
        const textY = chart.height / 2 + chart.legend.height / 2;
        ctx.fillText(text, textX, textY);
        ctx.fillStyle = '#000000';
        ctx.save();
      
    }
  };

  return (
    <>
      <Doughnut
        data={data}
        options={{
          cutout: "70%",
          aspectRatio: 1,

          plugins: {
            legend: { display: false },

            title: {
            //   display: true,
              text: "TITLE",
              color: "white",
              font: {
                weight: "700",
                size: 50,
              },
            },

            tooltip: {
              position: "nearest",
              bodyFont: {
                weight: "400",
                size: 16,
              },
              bodyColor: "tomato",
              titleColor: "blue",
              padding: 10,
            },

            subtitle: {
              display: false,
              text: "DJON",
              color: "gren",
              font: {
                weight: "700",
                size: 20,
              },
            },
          },
        }}
        plugins={[plugin]}
        // plugins={[
        //     {
        //       beforeDraw: function (chart) {
        //         drawInnerText(chart);
        //       },
        //     },
        //   ]}
      />
    </>
  );
}

export default Chart;

// legend: {
//     position: "right",
//     title: {
//         display: true,
//         color: 'red',
//         text: "DJON",
//         position: 'end',
//     },
//   },

// decimation: {
//     enabled: true,

//   },
//   filler: {
//     drawTime: 'beforeDatasetDraw',
//     propagate: true
//   }

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
