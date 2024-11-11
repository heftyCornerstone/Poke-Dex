import { createContext } from "react";

export const SelectionContext = createContext({
    pokemonSelection: [], 
    handlePokemonSelection: () => {} 
});