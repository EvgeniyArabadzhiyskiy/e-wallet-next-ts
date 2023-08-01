import { fetcher } from "../../helpers/fetcher";
import { NewTransaction } from "../../types/transactions";
import { ITransactionData } from "../../types/transactionValue";
import { TRANSACTIONS } from "../../constants/apiPath";

export const createTransaction = async (transaction: ITransactionData, token: string | undefined) => {

  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(transaction),
  };
  
  const data = await fetcher<NewTransaction>(`${TRANSACTIONS}`, options);

  return data;
};
