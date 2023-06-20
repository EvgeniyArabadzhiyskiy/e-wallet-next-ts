import { store } from "@/redux/store";
import PokemonTable from "../PokemonTable/PokemonTable";

function SSRPokemonTable() {
  const pokemons = store.getState().pokemons.pokemonsList;
  return (
    <div>
      <PokemonTable pokemons={pokemons} />
    </div>
  );
}

export default SSRPokemonTable;
