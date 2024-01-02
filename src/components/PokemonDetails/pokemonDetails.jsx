import { useParams } from "react-router-dom";
import "./pokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";

// eslint-disable-next-line react/prop-types
function PokemonDetails({pokemonName}) {
  const { id } = useParams();

  const [pokemon] = usePokemonDetails(id, pokemonName);

  return (
    <div className="pokemon-details-wrapper">
      <img className="pokemon-details-image" src={pokemon.image} />
      <div className="pokemon-details">
        <span>{pokemon.name}</span>
      </div>
      <div className="pokemon-details">Height : {pokemon.height}</div>
      <div className="pokemon-details">Weight : {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types && pokemon.types.map((t) => <div key={t}> {t}</div>)}
      </div>

      {pokemon.types && pokemon.similiarPokemons && (
        <div className="moreFirePokemons">
          More {pokemon.types[0]} type pokemons
          <ul>
            {pokemon.similiarPokemons.map((p) => (
              <li key={p.pokemon.url}>{p.pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
