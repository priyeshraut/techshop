import { createSlice } from "@reduxjs/toolkit";
import { productData } from "./productData";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    filteredProducts: productData,
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setFilteredProducts } = searchSlice.actions;

export default searchSlice.reducer;
