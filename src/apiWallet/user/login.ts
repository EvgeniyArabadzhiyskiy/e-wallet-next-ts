import { USER_LOGIN } from "@/src/constants/apiPath";
import { fetcher } from "@/src/helpers/fetcher";
import { IAuthCredentials, CurrentUser } from "@/src/types/user";

export const login = async (credentials: IAuthCredentials) => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(credentials),
  };

  const data = await fetcher<CurrentUser>(`${USER_LOGIN}`, options);

  return data;
};
