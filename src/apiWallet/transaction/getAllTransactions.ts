import { fetcher } from "../../helpers/fetcher";
import { TRANSACTIONS } from "../../constants/apiPath";
import { ITransactions } from "../../types/transactions";
import { isITransactions } from "../../helpers/isITransactions";

export const getAllTransactions = 
async (token: string | undefined, pageNum: number) => {
  // await new Promise((res) => setTimeout(() => res(console.log("Promise resolve")), 1000));

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    },
    // cache: "no-store",
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