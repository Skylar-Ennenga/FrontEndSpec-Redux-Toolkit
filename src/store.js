import { configureStore } from "@reduxjs/toolkit";
import exerciseListReducer from "./features/exerciseListSlice"



export const store = configureStore({
    reducer: {
        exerciseList: exerciseListReducer
    }
})