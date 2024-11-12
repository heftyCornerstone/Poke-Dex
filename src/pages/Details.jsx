import { useLocation, useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../assets/pokeDexConfigData/MOKE_DATA";
import styled from "styled-components";
import useSelectionToggle from "../hooks/useSelectionToggle";
import SelectionToggleBtn from "../components/SelectionToggleBtn";
import StyledBtn from "../components/StyledBtn";
import PokemonTypeTags from "../components/PokemonTypeTags";

const StDetailsMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ffe3b3;
`;
const StPokemonsheet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 600px;
  height: 70%;
`;
const StPokemonImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55%;
`;
const StPokemonImg = styled.img`
  width: 250px;
  @media (max-width: 600px) {
    width: 200px;
  }
`;
const StPokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 25%;
  text-align: center;
`;
const StPokemonName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
const StPokemonDesc = styled.div`
  word-break: keep-all;
`;
const StDetailsBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 20%;
`;

const DetailsButtons = ({ selectedPokemons, pokemonInfo }) => {
  const [pokemonSelection, setPokemonSelection] = useSelectionToggle(selectedPokemons);
  const pokemonSelectionHook = [pokemonSelection, setPokemonSelection];
  const navigateTo = useNavigate();

  const onClickGobackHandler = () => {
    navigateTo("/dex", { state: pokemonSelection });
  };
  const detailsBtnsStyle = {
    "width": "70px",
    "height": "35px",
    "fontSize": "15px",
  }

  return (
    <StDetailsBtns>
      <SelectionToggleBtn
        pokemonSelectionHook={pokemonSelectionHook}
        pokemonInfo={pokemonInfo}
        $style={detailsBtnsStyle}
      />
      <StyledBtn type="button" onClickHandler={onClickGobackHandler} $style={detailsBtnsStyle}>
        돌아가기
      </StyledBtn>
    </StDetailsBtns>
  );
};

const Details = () => {
  const location = useLocation();
  const { pokemonId } = useParams();
  const selectedPokemons = location.state;
  const pokemonInfo = MOCK_DATA.filter(
    (pokemonData) => pokemonData.id === parseInt(pokemonId)
  )[0];
  const { img_url, korean_name, types, description } = pokemonInfo;

  return (
    <StDetailsMain>
      <StPokemonsheet>
        <StPokemonImgWrapper>
          <StPokemonImg src={img_url} alt="no img" />
        </StPokemonImgWrapper>
        <StPokemonInfo>
          <StPokemonName>{korean_name}</StPokemonName>
          <PokemonTypeTags types={types} />
          <StPokemonDesc>{description}</StPokemonDesc>
        </StPokemonInfo>
        <DetailsButtons
          selectedPokemons={selectedPokemons}
          pokemonInfo={pokemonInfo}
        />
      </StPokemonsheet>
    </StDetailsMain>
  );
};

export default Details;
