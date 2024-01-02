import { Routes, Route } from "react-router-dom"
import Pokedex from "../components/Pokedex/pokedex1";
import PokemonDetails from "../components/PokemonDetails/pokemonDetails";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Pokedex />}></Route>
            <Route path="/pokemon/:id" element={<PokemonDetails />}></Route>
        </Routes>
    );
}

export default CustomRoutes