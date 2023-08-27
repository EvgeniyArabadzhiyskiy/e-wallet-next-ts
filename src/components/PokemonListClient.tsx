"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUserBalance } from "../apiWallet";
import Link from "next/link";
import { useRouter } from "next/navigation";

const getPokemon = async () => {
  // await new Promise((res) =>
  //   setTimeout(() => res(console.log("Promise resolve")), 4000)
  // );

  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`
  );
  return data.results;
};

export default function PokemonListClient() {
  // const queryClient = useQueryClient();
  // const Balance = queryClient.getQueriesData<any>(["Balance"]);
  // console.log(" Balance:", Balance[0]);

  const router = useRouter()
  

  const { data: totalBalance = 0 } = useUserBalance();
  // console.log("PokemonListClient  totalBalance:", totalBalance);

  //   const [pokemons, setPokemons] = useState([]);
  //   console.log("PokemonList  pokemons:", pokemons);

  //   useEffect(() => {
  //     (async () => {
  //       const pokemons = await getPokemon();
  //       //   console.log("PokemonList  pokemons:", pokemons);

  //       setPokemons(pokemons)
  //     })();
  //   },[]);

  const { data: pokemons = [], isError, error, isLoading} = useQuery({
    queryKey: ["Pokemons"],
    queryFn: getPokemon,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })
  // console.log("isLoading====================", isLoading);
  // console.log("PokemonListClient  isError:", isError);

  if (isError) {
    // return (
    //   <>
    //     {/* <h1 style={{color: "white"}}>{error.message}</h1> */}
    //     <button  type="button" onClick={() => console.log("Try Now Again")}>
    //       Try Again
    //     </button>
    //   </>
    // );
    // router.push("/home")
  }

  return (
    <>
      <h1 style={{ color: "white", fontSize: 30, marginBottom: 30 }}>
        Pokemon List Client Balance: {totalBalance}
      </h1>
      <Link style={{color: "white"}} href="/home/statistic">Statistic</Link>
      {isLoading 
      ? <h1 style={{ color: "white" }}>QUERY LOADING...</h1>
      : <ul>
        {pokemons.map((item: any) => {
          return (
            <li style={{ color: "white" }} key={item.name}>
              {item.name}
            </li>
          );
        })}
      </ul>}
    </>
  );
}
