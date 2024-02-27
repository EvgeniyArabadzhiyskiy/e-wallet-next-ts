import { getCurentLocaleDate } from "./getCurentLocaleDate";

export const getMinAndMaxTimestamps = ({
  month,
  year,
}: {
  month: string;
  year: string;
}) => {
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
      //   maxTimestamps: getCurentLocaleDate(new Date()).getTime(),
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
