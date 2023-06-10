"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const getPokemonInfo = async (): Promise<any> => {
  const req = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
    // {cache: 'no-store'}
  );
  const data = (await req.json()) as any;

  return data.results;
};

export default function HydratedPokemon() {
  const { data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonInfo,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Link href="/">HOME</Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((pokemon: any) => (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
