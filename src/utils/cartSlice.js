import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += action.payload.qty;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItemQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.qty = action.payload.qty;
      }
    },
  },
});


export const { addItem, removeItem, updateItemQty } = cartSlice.actions;

export default cartSlice.reducer;