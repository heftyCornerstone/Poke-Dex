import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SelectionToggleBtn from "./SelectionToggleBtn";
import PokemonTypeTags from "./PokemonTypeTags";
import { useContext } from "react";
import { SelectionContext } from "../context/selectionContext";

const StPokeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 200px;
  text-align: center;
  border: 2px solid #ffc75e;
  border-radius: 15px;
  background-color: #fffcf7;
  cursor: pointer;
  &:hover {
    background-color: #f2b94b;
  }
  @media (max-width: 1200px) {
    width: 110px;
    height: 185px;
  }
`;
const StPokeCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-align: center;
`
const StPokeCardImgWrapper = styled.div`
  width: 100%;
`
const StPokeCardImg = styled.img`
  width: 100%;
  height: 96px;
  @media (max-width: 1200px) {
    height: 75px;
  }
`
const StPokeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`
const StPokeCardName = styled.h5`
  font-size: 16px;
  font-weight: bold;
`

const PokemonCard = ({ pokemonInfo }) => {
  const data = useContext(SelectionContext);
  const { pokemonSelection } = data;
  const { img_url, korean_name, types, id } = pokemonInfo;
  const navigateTo = useNavigate();

  const onClickCardHandler = (e) => {
    const target = e.target.tagName;
    if (target !== "BUTTON") {
      navigateTo(`/details/${id}`, { state: pokemonSelection });
    }
  };

  const toggleBtnStyle = {
    "width": '65px',
    "height": '30px',
  }

  return (
    <StPokeCard id={id} onClick={onClickCardHandler}>
      <StPokeCardInner>
        <StPokeCardImgWrapper>
          <StPokeCardImg src={img_url} alt="no img" />
        </StPokeCardImgWrapper>
        <StPokeCardInfo>
          <StPokeCardName>{korean_name}</StPokeCardName>
          <PokemonTypeTags types={types} />
        </StPokeCardInfo>
        <SelectionToggleBtn
          pokemonInfo={pokemonInfo}
          style={toggleBtnStyle}
        />
      </StPokeCardInner>
    </StPokeCard>
  );
};

export default PokemonCard;
