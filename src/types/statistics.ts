export interface IStatistic {
  _id: string;
  totalSum: number;
  type: string;
}

export interface IColor {
  [key: string]: string;
}

export interface IStatPeriod {
  month: string;
  year: string;
}

export interface IChartData {
  sum: number[];
  colors: string[];
  chartCategories: string[];
}
