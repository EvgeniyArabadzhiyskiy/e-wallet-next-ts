import { useSession } from "next-auth/react";

export const useUser = () => {
  const { data, status, update } = useSession();

  const token = data?.user.token;
  const user = data?.user.user;
  const isLoading = status === "loading";

  return { user, token, status, isLoading, update };
};
