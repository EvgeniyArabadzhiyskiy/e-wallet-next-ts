import { IChartData, IStatistic } from "../types/statistics";
import { getCategoryColor } from "./getCategoryColor";

export const getStatsResult = (stats: IStatistic[]): IChartData => {
  const expenseResults = stats.filter(({ type }) => type === "expense");

  const sum = expenseResults.map(({ totalSum }) => totalSum.toString());
  const chartCategories = expenseResults.map(({ _id }) => _id);
  const colors = expenseResults.map(({ _id }) => getCategoryColor(_id));

  return { sum, colors, chartCategories };
};
