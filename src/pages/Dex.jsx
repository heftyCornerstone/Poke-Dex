import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import useSelectionToggle from "../hooks/useSelectionToggle";
import { useLocation } from "react-router-dom";

const StMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    width: 100%;
    gap: 50px;
`;

const Dex = () => {
    const location = useLocation();
    const storedPokemonsState = (location.state) ? location.state : [];
    const selectionHook = useSelectionToggle(storedPokemonsState);
    
    return (
        <StMain>
            <Dashboard selectionHook={selectionHook} />
            <PokemonList selectionHook={selectionHook} />
        </StMain>
    );
}

export default Dex;