import { configureStore } from "@reduxjs/toolkit";
import selection from "../slices/selectionSlice";

const store = configureStore({
    reducer: { selection, },
});

export default store;