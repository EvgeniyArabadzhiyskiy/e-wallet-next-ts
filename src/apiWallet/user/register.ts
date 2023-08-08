import { USER_REGISTER } from "@/src/constants/apiPath";
import { fetcher } from "@/src/helpers/fetcher";
import { ICredentials } from "@/src/types/registerValues";
import { CurrentUser } from "@/src/types/user";

export const register = async (credentials: ICredentials) => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(credentials),
  };

  const data = await fetcher<CurrentUser>(`${USER_REGISTER}`, options);

  return data;
};
