import { fetcher } from "../../helpers/fetcher";
import { IBalance } from "../../types/transactions";
import { BALANCE } from "../../constants/apiPath";

export const getBalance = async (authToken: string | undefined) => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  const data = await fetcher<IBalance>(`${BALANCE}`, options);

  return data;
};
