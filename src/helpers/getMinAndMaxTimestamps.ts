import { type TStatisticValues } from "./inputSchemas";

export const getMinAndMaxTimestamps = ({ month, year }: TStatisticValues) => {

  if (!month && year) {
    return {
      minTimestamps: new Date(Number(year), 0, 1, 2).getTime(),
      maxTimestamps: new Date(Number(year) + 1, 0, 1, 1, 59, 59, 999).getTime(),
    };
  }

  if (!month && !year) {
    return {
      minTimestamps: 0,
      maxTimestamps: new Date().getTime() + 2 * 60 * 60 * 1000,
    };
  }

  return {
    minTimestamps: new Date(Number(year), Number(month), 1, 2).getTime(),
    maxTimestamps: new Date(
      Number(year),
      Number(month) + 1,
      1,
      1,
      59,
      59,
      999
    ).getTime(),
  };
};
