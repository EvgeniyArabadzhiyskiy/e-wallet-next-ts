import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { register } from "./user/register";

export const useRegisterUser = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      const { token, ...rest } = data;

      setCookie(null, "authToken", `${token}`, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      router.push("/home/transactions");
    },
  });

  return mutation;
};
