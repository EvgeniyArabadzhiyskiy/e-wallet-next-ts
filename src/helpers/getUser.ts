import axios from "axios";
import { BASE_URL, USER_CURRENT } from "../constants/apiPath";

// const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
// const USER_CURRENT = "/users/current";

export const getUser = async (authToken: string | undefined) => {
  try {
    const { data } = await axios(`${BASE_URL}${USER_CURRENT}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};
