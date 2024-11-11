import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import useSelectionToggle from "../hooks/useSelectionToggle";
import { useLocation } from "react-router-dom";
import { SelectionContext } from "../context/selectionContext";

const StMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
    gap: 50px;
`

const Dex = () => {
    const location = useLocation();
    const storedPokemonsState = (location.state) ? location.state : [];
    const [pokemonSelection, handlePokemonSelection] = useSelectionToggle(storedPokemonsState);
    return (
        <SelectionContext.Provider value={{ pokemonSelection, handlePokemonSelection }}>
            <StMain>
                <Dashboard />
                <PokemonList />
            </StMain>
        </SelectionContext.Provider>
    )
}

export default Dex;