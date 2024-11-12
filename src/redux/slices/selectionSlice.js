import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selection: [],
}

const selectionSlice = createSlice({
    name: "selection",
    initialState,
    reducers: {
        addPokemon: (state, action)=>{
            state.selection.push(action.payload);
        },
        deletePokemon: (state, action)=>{
            state.selection = state.selection.filter((pokemonData)=>pokemonData.id !== action.payload.id);
        }
    },
});

export const {addPokemon, deletePokemon} = selectionSlice.actions;
export default selectionSlice.reducer;