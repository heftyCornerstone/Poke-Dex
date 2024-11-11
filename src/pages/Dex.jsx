import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

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
    
    return (
        <StMain>
            <Dashboard />
            <PokemonList />
        </StMain>
    )
}

export default Dex;