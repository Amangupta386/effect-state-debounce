import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList() {
  
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: "",
  });

  async function downloadPokemons() {

    setPokemonListState((state) => ({ ...state, isLoading: true }));

    const response = await axios.get(pokemonListState.pokedexUrl); // This is download the list of pokemons

    const pokemonResult = response.data.results; // we get the array of pokemons from results

    setPokemonListState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevUrl: response.data.previous,
    }));

    const pokemonResultPromise = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url));
    // passing that promise array to axios.all (it is same as promise.all())

    const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemons detailed data
    // new iterate on the data of each pokemon, and exact id, name and image and types

    const pokeListResult = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        types: pokemon.types,
      };
    });

    setPokemonListState((state) => ({
      ...state,
      pokemonList: pokeListResult,
      isLoading: false,
    }));
  }
  useEffect(() => {
    downloadPokemons();
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
}
export default usePokemonList;
