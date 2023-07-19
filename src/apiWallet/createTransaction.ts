import { fetcher } from "../helpers/fetcher";
import { BASE_URL, TRANSACTIONS } from "../constants/apiPath";
import { ITransactionData } from "../types/transactionValue";

export const createTransaction = async (transaction: ITransactionData, token: string | undefined) => {

  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(transaction),
  };
  
  const data = await fetcher(`${BASE_URL}${TRANSACTIONS}`, options);

  return data;
};
