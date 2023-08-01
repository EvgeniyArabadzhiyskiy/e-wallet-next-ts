import { TRANSACTIONS } from "../../constants/apiPath";
import { fetcher } from "../../helpers/fetcher";
import { isITransactions } from "../../helpers/isITransactions";
import { ITransactions } from "../../types/transactions";

export const getAllTransactions = 
async (authToken: string | undefined, pageNum: number) => {

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    cache: "no-store",
  };
  
  try {
    const data = await fetcher<ITransactions>
    (`${TRANSACTIONS}?page=${pageNum}&limit=10`, options);
    
    if (!isITransactions(data)) {
      throw new Error("Invalid data format");
    }

    return data;

  } catch (error) {
    console.log("Error:", (error as Error).message);
    throw error
  }
}