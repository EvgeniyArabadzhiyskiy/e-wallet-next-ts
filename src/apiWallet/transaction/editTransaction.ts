import { fetcher } from "../../helpers/fetcher"
import { TRANSACTIONS } from "../../constants/apiPath"
import { ChangedTransaction } from "../../types/transactions"

export const editTransaction = async (id: string, transation: any, token: string | undefined) => {
    const options: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(transation),
    }
  
    const data = await fetcher<ChangedTransaction>(`${TRANSACTIONS}/edit/${id}`, options)
  
    return data
}