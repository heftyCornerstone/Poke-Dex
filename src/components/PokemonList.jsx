import MOCK_DATA from "../assets/pokeDexConfigData/MOKE_DATA";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const StPokemonListWrapper = styled.div`
  display: grid;
  align-items: center;
  width: 90%;
  border: 3px dashed #eba21a;
  border-radius: 15px;
  background-color: #ffd994;
`;
const StPokemonListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 30px;
  width: 100%;
  margin: 50px 0;
`;

const PokemonList = ({ selectionHook }) => {

    return (
        <StPokemonListWrapper>
            <StPokemonListGrid>
                {MOCK_DATA.map((data) => {
                    const { id } = data;

                    return (
                        <PokemonCard
                            key={id}
                            pokemonInfo={data}
                            selectionHook={selectionHook}
                        />
                    );
                })}
            </StPokemonListGrid>
        </StPokemonListWrapper>
    );
};

export default PokemonList;