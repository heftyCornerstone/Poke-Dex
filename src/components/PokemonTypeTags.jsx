import pokeTypeColors from "../assets/pokeDexConfigData/pokeTypeColors";
import styled from "styled-components";

const StTypeTages = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 5px;
`;

const StTypeTageSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 3px 3px 3px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 3px;
  background-color: ${({ color }) => color ? color : "black"};
`;

const PokemonTypeTags = ({ types }) => {
  return (
    <StTypeTages>
      {types.map((type, i) => {
        const typeColor = pokeTypeColors[type];
        return (
          <StTypeTageSpan key={`type${i}`} color={typeColor}>
            {type}
          </StTypeTageSpan>
        );
      })}
    </StTypeTages>
  );
};

export default PokemonTypeTags;
