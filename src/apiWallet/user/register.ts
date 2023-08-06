import { USER_REGISTER } from "@/src/constants/apiPath";
import { fetcher } from "@/src/helpers/fetcher";
import { ICredentials } from "@/src/types/registerValues";

export const register = async (credentials: ICredentials) => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(credentials),
  };

  const data = await fetcher<any>(`${USER_REGISTER}`, options);

  console.log("register  data:", data);
  return data;
};
