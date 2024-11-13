import { Outlet } from "react-router-dom";
import { SelectionContext } from "../context/selectionContext";
import { useState } from "react";

const SelectionContextLayout = ()=>{
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

export default SelectionContextLayout;