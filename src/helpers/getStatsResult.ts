import { IChartData, IStatistic } from "../types/statistics";
import { getCategoryColor } from "./getCategoryColor";

export const getStatsResult = (stats: IStatistic[]): IChartData => {
  const expenseResults = stats.filter(({ type }) => type === "expense");

  const sum = expenseResults.map(({ totalSum }) => totalSum);
  const chartCategories = expenseResults.map(({ id }) => id);
  const colors = expenseResults.map(({ id }) => getCategoryColor(id));

  return { sum, colors, chartCategories };
};
