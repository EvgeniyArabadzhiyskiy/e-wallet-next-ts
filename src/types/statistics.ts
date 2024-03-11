export interface IStatistic {
  id: string;
  totalSum: number;
  type: string;
}

export interface IColors {
  [key: string]: {
    label: string;
    value: string;
  };
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
