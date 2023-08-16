import { Plugin } from "chart.js";

export const createCenterTextPlugin = (totalBalance: number) => {
  const plugin: Plugin<"doughnut"> = {
    id: "center- text",
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.restore();

      const fontSize = (height / 200).toFixed(2);
      ctx.font = `400 ${fontSize + "em sans-serif"}`;
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFF"

      const text = totalBalance.toFixed(2);
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return plugin
};
