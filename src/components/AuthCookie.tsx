// "use client";

import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { use, useEffect, useState } from "react";
import { authOptions } from "../lib/auth";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

// export const dynamic = 'force-dynamic'

// "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"

type ApiResponse<T> = {
  data: T;
  // error: string | null;
};

interface IPokemon {
  name: string;
  url: string;
}

interface IPokemons {
  results: IPokemon[];
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    console.log("getPok  error:", (error as Error).message);
    throw error;
    // throw new Error("Not Found");
  }
}

// const httpFetcher = async (url: string) => {
//   const response = await fetch(url);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error("Not Found");
//   }

//   return data
// }

interface HttpResponse<T> extends Response {
  parseBody?: T;
}

const httpFetcher = async <T,>(url: string): Promise<HttpResponse<T>> => {
  const response: HttpResponse<T> = await fetch(url);

  if (!response.ok) {
    throw new Error("Not Found");
  }

  response.parseBody = await response.json();

  return response;
};

// async function httpFetcher<T>(url: string): Promise<HttpResponse<T>> {
//   const response: HttpResponse<T> = await fetch(url);

//   response.parseBody = await response.json();

//   return response;
// }

const getPok = async () => {
  return await fetchData<IPokemons>(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
  );
};

const getTrans = async () => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTM0ZGFhMTQyNGVhZDExNWVhNTJhNSIsImlhdCI6MTY4ODQwNTUyNiwiZXhwIjoxNjg5NjE1MTI2fQ.nTUHoyF8mdoMniLDqUw5ZphOVBqWFWx4thg-DM3dVhg"}`,
    },
    cache: "no-store",
  };

  try {
    const response = await fetch(
      "http://localhost:4001/api/transactions",
      options
    );

    if (!response.ok) {
      throw new Error("Not Found");
    }

    const data = await response.json();
    console.log("getTrans  data:", data);
    return data;
  } catch (error) {
    console.log("getTrans  error:", (error as Error).message);
    throw error;
  }
};

// getPok()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

export const getPokemons = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
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

export default async function AuthCookie() {
  // const [counter, setCounter] = useState(0);
  // const [data, setData] = useState<IPokemons>();
  // const [error, setError] = useState<any>(null);

  // const { data, isError, error } = useQuery({
  //   queryKey: ["Pokemon"],
  //   queryFn: getPok,
  //   staleTime: Infinity,
  //   refetchOnWindowFocus: false,
  //   retry: 0,
  // });

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const pokemon = await getPok();
  //       setData(pokemon);
  //     } catch (error) {
  //       console.log("getPok  error:", (error as Error).message);
  //       // throw error;

  //       setError(error)
  //     }
  //   })();
  // }, []);

  // getPokemons()
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err.message));

  // const session = await getServerSession(authOptions);
  // console.log("AuthCookie  session:", session);

  // const authToken = cookies().get("authToken")?.value;
  // const data = use(getPokemons())
  // console.log("AuthCookie  data<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>:", data);
  // const session = use(getServerSession(authOptions))
  // console.log("AuthCookie  session:", session);

  const data = await getTrans();
  console.log("AuthCookie  data:", data.transactions[0]._id);
  // console.log("AuthCookie  data:+++++++++++++++++++++++++", data.results[0]);

  // if (error) {
  //   console.log("AuthCookie  error:", (error as Error).message);
  //   return (
  //     <>
  //       {/* <h1>{(error as AxiosError).message}</h1> */}
  //       <h1>{(error as Error).message}</h1>
  //     </>
  //   );
  // }

  // const handleClick = () => {
  //   setCounter((prev) => prev + 1);
  // };

  // if (counter === 3) {
  //   throw new Error("I crashed!");
  // }

  return (
    <>
      <h1>About</h1>
      {/* <h1>{counter}</h1>
      <button type="button" onClick={handleClick}>
        Click
      </button> */}

      {data && (
        <>
          <pre>{JSON.stringify(data.transactions[0], null, 2)}</pre>
        </>
      )}

      {/* <h1>Auth Token: {authToken}</h1> */}
    </>
  );
}
