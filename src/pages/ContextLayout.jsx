import { Outlet } from "react-router-dom";
import { SelectionContext } from "../context/selectionContext";
import useSelectionToggle from "../hooks/useSelectionToggle";

const ContextLayout = ()=>{
    const [pokemonSelection, handlePokemonSelection] = useSelectionToggle([])
    return(
        <SelectionContext.Provider value={{ pokemonSelection, handlePokemonSelection }}>
            <Outlet/>
        </SelectionContext.Provider>
    )
}

export default ContextLayout;