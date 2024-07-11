import { createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
    name: "path",
    initialState: {
        fromPath: null,
    },
    reducers: {
        setFromPath: (state, action) => {
            state.fromPath = action.payload;
        },
    },
});

export const {setFromPath} = pathSlice.actions;

export default pathSlice.reducer