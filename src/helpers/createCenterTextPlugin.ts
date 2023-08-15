import { Chart, BubbleDataPoint, ChartTypeRegistry, Point } from "chart.js";

export const createCenterTextPlugin = (totalBalance: number) => {
  return {
    id: "center- text",
    beforeDraw: (
      chart: Chart<
        keyof ChartTypeRegistry,
        (number | Point | [number, number] | BubbleDataPoint | null)[],
        unknown
      >
    ) => {
      const { ctx, width, height } = chart;
      ctx.restore();

      const fontSize = (height / 140).toFixed(2);
      ctx.font = `700 ${fontSize + "em sans-serif"}`;
      ctx.textBaseline = "middle";

      const text = `₴ ${totalBalance.toFixed(2)}`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };
};