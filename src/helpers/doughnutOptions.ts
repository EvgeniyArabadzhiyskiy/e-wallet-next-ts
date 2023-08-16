import { ChartOptions } from "chart.js";

export const doughnutOptions: ChartOptions<"doughnut"> = {
  cutout: "70%",
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      padding: 18,
      titleColor: "#10b981",
      titleFont: {
        size: 16,
      },
      bodyFont: {
        size: 14,
      },
    },
  },
};
