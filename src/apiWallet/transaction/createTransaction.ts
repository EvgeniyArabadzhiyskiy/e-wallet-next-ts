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


// export const createTransaction = async (
//   transaction: ITransactionData,
//   token: string | undefined
// ) => {
//   try {
//     const {data} = await axios.post(`https://wallet-backend-xmk0.onrender.com/api/transactions`, transaction, {
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//         Authorization: `Bearer ${"Wrong token"}`,
//       },
//     });
//     console.log("data:", data);

//     return data;
//   } catch (error) {
//     console.log("createTransaction  error:", (error as any).response.data.message);
//     throw error;
//   }
// };
