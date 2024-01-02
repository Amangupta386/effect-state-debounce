import Search from "../search/search";
import './pokedex.css'
import PokemonList from "../PokemonList1/pokemonList";
import {  useState } from "react";
import PokemonDetails from "../PokemonDetails/pokemonDetails";

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('');



    return (
        <div className="pokedex-wrapper">
        
            <Search updateSearchTerm ={setSearchTerm} />
       
            {(!searchTerm)?<PokemonList />
            :<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
           
        </div>
    );
}

export default Pokedex;