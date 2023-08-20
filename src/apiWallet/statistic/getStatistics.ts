import { BASE_URL } from "@/src/constants/apiPath";
import { fetcher } from "@/src/helpers/fetcher";
import { getQueryString } from "@/src/helpers/getQueryString";
import { IStatPeriod, IStatistic } from "@/src/types/statistics";

export const getStatistics = async (token: string | undefined, { month, year }: IStatPeriod ) => {
  // await new Promise((res) =>
  //   setTimeout(() => res(console.log("Promise resolve")), 4000)
  // );

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // cache: "no-store",
  };

  const data = await fetcher<IStatistic[]>(`${getQueryString({ month, year })}`, options);

  // console.log("data:", data);
  return data
    
  };