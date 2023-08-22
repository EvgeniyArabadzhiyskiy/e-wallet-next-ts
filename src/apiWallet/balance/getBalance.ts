import { fetcher } from "../../helpers/fetcher";
import { IBalance } from "../../types/transactions";
import { BALANCE } from "../../constants/apiPath";

export const getBalance = async (authToken: string | undefined) => {
  // await new Promise((res) => setTimeout(() => res(console.log("Promise resolve")), 5000));

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  try {
    const data = await fetcher<IBalance>(`${BALANCE}`, options);

    if (typeof data !== "object" || typeof data.userBalance !== "number") {
      throw new Error("Invalid data format");
    }

    return data;
    
  } catch (error) {
    console.log("Error:", (error as Error).message);
    throw error;
  }
};
