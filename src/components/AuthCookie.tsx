// "use client"

import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { use } from "react";
import { authOptions } from "../lib/auth";

const getPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
  const {results} = await res.json()
  // console.log("============================================results", results);
  return results 
}

export default async function AuthCookie  () {
  // const session = await getServerSession(authOptions);
  // console.log("AuthCookie  session:", session);

  // const authToken = cookies().get("authToken")?.value;
  // const data = use(getPokemons())
  // console.log("AuthCookie  data<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>:", data);
  // const session = use(getServerSession(authOptions))
  // console.log("AuthCookie  session:", session);

  const data = await getPokemons()
  console.log("AuthCookie  data:", data);
 
  return (
    <>
      <h1>{JSON.stringify(data)}</h1>
      {/* <h1>Auth Token: {authToken}</h1> */}
    </>
  );
};

 AuthCookie;
