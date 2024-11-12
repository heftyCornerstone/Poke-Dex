import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import pokeBoxLimitNum from "../assets/pokeDexConfigData/pokeBoxLimitNum";
import DashboardLogo from "../assets/imgs/Dashboard_Logo.png"
import PokeBall from "../assets/imgs/Poke_Ball.webp"

const StDashboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  border: 3px dashed #eba21a;
  border-radius: 15px;
  background-color: #ffd994;
`;
const StDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin : 30px 20px;
  width: 100%;
`;
const StLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  height: 40%;
`;
const StLogoImg = styled.img`
  width: 60%;
`;
const StPokemonSlotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;
const StPokemonSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
const StPokemonSlotBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 200px;
  border: 2px solid #ffc75e;
  border-radius: 15px;
  background-color: #fffcf7;
  @media (max-width: 1200px) {
    width: 110px;
    height: 185px;;
  }
`;
const StPokemonSlotBoxImg = styled.img`
  width: 50%;
`;

const PokemonSlotBox = () => {
  return (
    <StPokemonSlotBox>
      <StPokemonSlotBoxImg src={PokeBall} alt="" />
    </StPokemonSlotBox>
  );
};

const PokemonSlot = ({ selectionHook }) => {
  const [pokemonSelection,] = selectionHook;
  const shortage = pokeBoxLimitNum - pokemonSelection.length;
  const fillerArr = Array(shortage).fill(null);
  const inSlot = [...pokemonSelection, ...fillerArr];
  return (
    <StPokemonSlot>
      {inSlot.map((curPokemon, i) => {
        const key = `pokemonSlot${i}`;
        return curPokemon ? (
          <PokemonCard
            key={key}
            pokemonInfo={curPokemon}
            selectionHook={selectionHook}
          />
        ) : (
          <PokemonSlotBox key={key} />
        );
      })}
    </StPokemonSlot>
  );
};

const Dashboard = ({ selectionHook }) => {
  return (
    <StDashboardWrapper>
      <StDashboard>
        <StLogo>
          <StLogoImg src={DashboardLogo} alt="no logo" />
        </StLogo>
        <StPokemonSlotWrapper>
          <PokemonSlot
            selectionHook={selectionHook}
          />
        </StPokemonSlotWrapper>
      </StDashboard>
    </StDashboardWrapper>
  );
};

export default Dashboard;
