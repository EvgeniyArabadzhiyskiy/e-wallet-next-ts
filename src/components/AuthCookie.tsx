"use client";

import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { use, useEffect } from "react";
import { authOptions } from "../lib/auth";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

// export const dynamic = 'force-dynamic'

// "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
const getPokemons = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemo?offset=0&limit=10"
    );
    // console.log("getPokemons  response:", response.status);

    if (!response.ok) {
      throw new Error("Not Found");
      // throw new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // throw new Error("Network Error");
    throw error;
  }
};

const getPokemonsAxios = async () => {
  // try {
  const response = await axios(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
  );
  // console.log("getPokemons  response:", response);

  return response.data;
  // } catch (error) {
  //   throw error as AxiosError;
  //   // throw new Error("Network Error");
  // }
};

// getPokemons()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// getPokemonsAxios()
//   .then((data) => console.log(data))
//   .catch((err: AxiosError) => console.log(err));
// .catch((err: AxiosError) => console.log(err.message));
// .catch((err) => console.log(err.response.data))

export default  function AuthCookie() {
  // const { data, isError, error } = useQuery({
  //   queryKey: ["Pokemon"],
  //   queryFn: getPokemons,
  //   staleTime: Infinity,
  //   refetchOnWindowFocus: false,
  //   retry: 0,
  // });

  useEffect(() => {
    throw new Error("Custom Error");
  }, []);

  // getPokemons()
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err.message));

  // console.log("AuthCookie  error:", error);
  // console.log("AuthCookie  data:", data);

  // const session = await getServerSession(authOptions);
  // console.log("AuthCookie  session:", session);

  // const authToken = cookies().get("authToken")?.value;
  // const data = use(getPokemons())
  // console.log("AuthCookie  data<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>:", data);
  // const session = use(getServerSession(authOptions))
  // console.log("AuthCookie  session:", session);

  // const data = await getPokemonsAxios();
  // console.log("AuthCookie  data:+++++++++++++++++++++++++", data.results[0]);

  // if (isError) {
  //   return (
  //     <>
  //       {/* <h1>{(error as AxiosError).message}</h1> */}
  //       <h1>{(error as Error).message}</h1>
  //     </>
  //   );
  // }

  return (
    <>
      {/* <><pre>{JSON.stringify(data.results[0], null, 2)}</pre></> */}
      {/* <h1>Auth Token: {authToken}</h1> */}
    </>
  );
}


