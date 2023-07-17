import { fetcher } from "../helpers/fetcher";
import { BASE_URL, TRANSACTIONS } from "../constants/apiPath";

export const createTransaction = async (transaction: any) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTM0ZGFhMTQyNGVhZDExNWVhNTJhNSIsImlhdCI6MTY4OTE0NjM0NSwiZXhwIjoxNjkwMzU1OTQ1fQ.GuTYaKcbkLR4odPZ3iJBd6ORIDPHZaAXwVKRfmSpoco";

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
