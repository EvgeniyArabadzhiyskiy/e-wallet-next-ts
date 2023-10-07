import { fetcher } from "../../helpers/fetcher";
import { TRANSACTIONS } from "../../constants/apiPath";
import { RemoveTransaction } from "../../types/transactions";

export const deleteTransaction = async (id: string, token: string | undefined) => {
  const options: RequestInit = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await fetcher<RemoveTransaction>(`${TRANSACTIONS}/${id}`, options);

  return data;
};