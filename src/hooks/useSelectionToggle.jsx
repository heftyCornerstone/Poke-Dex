import { useState } from 'react'

const useSelectionToggle = (initialState) => {
    const [pokemonSelection, setPokemonSelection] = useState(initialState);    
    const handlePokemonSelection = (isDelete, pokemon) => {
        if (isDelete) {
            const modifiedSelection = pokemonSelection.filter((curpokemon) => curpokemon.id !== pokemon.id);
            setPokemonSelection(modifiedSelection);
        } else {
            const newSelection = [...pokemonSelection, pokemon];
            setPokemonSelection(newSelection);
        }
    }

    return [pokemonSelection, handlePokemonSelection];
}

export default useSelectionToggle