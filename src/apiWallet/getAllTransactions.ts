import { BASE_URL, TRANSACTIONS } from "../constants/apiPath";
import { fetcher } from "../helpers/fetcher";
import { isITransactions } from "../helpers/isITransactions";
import { ITransaction, ITransactions } from "../types/transactions";

export const getAllTransactions = 
async (authToken: string | undefined, pageNum: number): Promise<ITransactions> => {

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    cache: "no-store",
  };
  
  try {
    const data = await fetcher<ITransactions>
    (`${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`, options);
    
    if (!isITransactions(data)) {
      throw new Error("Invalid data format");
    }

    const transactions: ITransactions = data;

    return transactions;

  } catch (error) {
    console.log("Error:", (error as Error).message);
    throw error
  }
}