import { useContext } from "react";
import selectionBtnToggler from "../utils/selectionBtnToggler";
import StyledBtn from "./StyledBtn";
import { SelectionContext } from "../context/selectionContext";

const SelectionToggleBtn = ({ pokemonInfo, style }) => {
    const data = useContext(SelectionContext);
    const pokemonSelectionHook = [data.pokemonSelection, data.handlePokemonSelection];
    const { selectionBtnConfig, handleOnclick } = selectionBtnToggler(
        pokemonSelectionHook,
        pokemonInfo
    );
    const { configStyles, btnMode } = selectionBtnConfig;

    const btnStyle = { ...style, ...configStyles }

    return (
        <StyledBtn onClickHandler={handleOnclick} style={btnStyle}>
            {btnMode}
        </StyledBtn>
    );
};

export default SelectionToggleBtn;