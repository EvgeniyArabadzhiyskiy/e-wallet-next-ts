import { useSession } from "next-auth/react";

export const useUser = () => {
  const { data, status, update } = useSession();

  const token = data?.token;
  const user = data?.user;
  const isLoading = status === "loading";

  return { user, token, status, isLoading, update };
};
