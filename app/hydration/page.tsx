import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import HydratedPokemon from "@/components/HydratedPokemon/HydratedPokemon";

const getPokemonInfo = async (): Promise<any> => {
  const req = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`,
    {cache: 'no-store'}
  );
  const data = (await req.json()) as any;

  return data.results;
};

export default async function HydratedPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["pokemon"], getPokemonInfo);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HydratedPokemon />
    </Hydrate>
  );
}
