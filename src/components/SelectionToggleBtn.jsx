import selectionBtnToggler from "../utils/selectionBtnToggler";
import StyledBtn from "./StyledBtn";

const SelectionToggleBtn = ({ pokemonSelectionHook, pokemonInfo, style }) => {
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