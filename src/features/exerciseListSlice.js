import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exerciseList: [],
};

export const exerciseListSlice = createSlice({
    name: "exercise list",
    initialState,


    reducers: {
        addItem: (state, action) => {

            state.exerciseList.push(action.payload)

        },

        deleteItem: (state, action) => {
            const index = action.payload;

            const newState = state.exerciseList.filter((_, i) => i !== index);
           
            state.exerciseList = newState;
        },
    },
});

export const {addItem, deleteItem} = exerciseListSlice.actions;

export default exerciseListSlice.reducer;