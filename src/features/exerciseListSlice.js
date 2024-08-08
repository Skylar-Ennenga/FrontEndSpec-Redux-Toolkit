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
            state.exerciseList.filter((action.payload))
        },
    },
});

export const {addItem, deleteItem} = exerciseListSlice.actions;

export default exerciseListSlice.reducer;