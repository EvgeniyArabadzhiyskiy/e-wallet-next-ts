import { fetcher } from "./fetcher";
import { IBalance } from "../types/transactions";
import { BASE_URL, BALANCE } from "../constants/apiPath";

export const getBalance = async (authToken: string | undefined) => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  const data = await fetcher<IBalance>(`${BASE_URL}${BALANCE}`, options);

  return data;
};
