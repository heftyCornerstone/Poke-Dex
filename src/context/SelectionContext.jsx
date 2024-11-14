import { Outlet } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

const SelectionContext = createContext();

const SelectionContextProvider = ()=>{
    const [pokemonSelection, setPokemonSelection] = useState([]);
    const handlePokemonSelection = (isDelete, pokemon) => {
        if (isDelete) {
            const modifiedSelection = pokemonSelection.filter((curpokemon) => curpokemon.id !== pokemon.id);
            setPokemonSelection(modifiedSelection);
        } else {
            const newSelection = [...pokemonSelection, pokemon];
            setPokemonSelection(newSelection);
        }
    }
    
    return(
        <SelectionContext.Provider value={{ pokemonSelection, handlePokemonSelection }}>
            <Outlet/>
        </SelectionContext.Provider>
    );
}

export {SelectionContext, SelectionContextProvider};