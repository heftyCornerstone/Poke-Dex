//import { useContext } from "react";
import selectionBtnToggler from "../utils/selectionBtnToggler";
import StyledBtn from "./StyledBtn";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/slices/selectionSlice";

const SelectionToggleBtn = ({ pokemonInfo, style }) => {
    const dispatch = useDispatch();
    const handlePokemonSelection = (isDelete, pokemon) => {
        if (isDelete) {
            dispatch(deletePokemon(pokemon));
        } else {
            dispatch(addPokemon(pokemon));
        }
    }
    const selection = useSelector((state)=>state.selection.selection);
    const { selectionBtnConfig, handleOnclick } = selectionBtnToggler(
        selection, 
        handlePokemonSelection,
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