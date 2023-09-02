import { fetcher } from "@/src/helpers/fetcher";
import { getQueryString } from "@/src/helpers/getQueryString";
import { IStatPeriod, IStatistic } from "@/src/types/statistics";

export const getStatistics = async (token: string | undefined, { month, year }: IStatPeriod ) => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // cache: "no-store",
  };

  return await fetcher<IStatistic[]>(`${getQueryString({ month, year })}`, options);
};