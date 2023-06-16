"use client";

import { useQuery } from "@tanstack/react-query";
import { parseCookies } from "nookies";
// import { cookies } from "next/headers";

const getPokemonInfo = async (): Promise<any> => {
  const req = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`,
    { cache: "no-store" }
  );
  const data = (await req.json()) as any;

  return data.results;
};

interface IProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IProps) => {

  const cookies = parseCookies().user

  const isEnabled = !!cookies
  // const isEnabled = true
  console.log("AuthProvider  isEnabled:", isEnabled);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["Pokemon"],
    queryFn: getPokemonInfo,
    staleTime: Infinity,
    enabled: isEnabled,
  });
  console.log("AuthProvider  isFetching:", isFetching);
  // console.log("AuthProvider  isLoading:", isLoading);

  console.log("Providers  data:", data);

  // console.log("Server");
  //   const cookieStore = cookies();
  //   const user = cookieStore.get("user")?.value;
  //   console.log("AuthProvider  user:", user);

  // if (isFetching) {
  //   return <h2>Loading Auth...</h2>
  // }

  return <div>{children}</div>;
};

export default AuthProvider;
