import { useContext } from "react";
import selectionBtnToggler from "../utils/selectionBtnToggler";
import StyledBtn from "./StyledBtn";
import { SelectionContext } from "../context/SelectionContext";

const SelectionToggleBtn = ({ pokemonInfo, $style }) => {
    const { pokemonSelection, handlePokemonSelection } = useContext(SelectionContext);
    const pokemonSelectionHook = [pokemonSelection, handlePokemonSelection];
    const { selectionBtnConfig, handleOnclick } = selectionBtnToggler(
        pokemonSelectionHook,
        pokemonInfo
    );
    const { configStyles, btnMode } = selectionBtnConfig;

    const btnStyle = { ...$style, ...configStyles }

    return (
        <StyledBtn onClickHandler={handleOnclick} $style={btnStyle}>
            {btnMode}
        </StyledBtn>
    );
};

export default SelectionToggleBtn;