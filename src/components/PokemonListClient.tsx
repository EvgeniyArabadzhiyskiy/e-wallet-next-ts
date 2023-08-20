"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const getPokemon = async () => {
  await new Promise((res) =>
    setTimeout(() => res(console.log("Promise resolve")), 4000)
  );

  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`
  );
  return data.results;
};

export default  function PokemonListClient() {
//   const [pokemons, setPokemons] = useState([]);
//   console.log("PokemonList  pokemons:", pokemons);
  
//   useEffect(() => {
//     (async () => {
//       const pokemons = await getPokemon();
//       //   console.log("PokemonList  pokemons:", pokemons);

//       setPokemons(pokemons)
//     })();
//   },[]);

const { data: pokemons = [], isLoading} = useQuery({
    queryKey: ["Pokemons"],
    queryFn: getPokemon,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
})
console.log("isLoading====================", isLoading);

  return (
    <>
      <h1 style={{ color: "white", fontSize: 30, marginBottom: 30 }}>
        Pokemon List Client
      </h1>
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
