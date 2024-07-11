import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice";
import pathReducer from "./pathSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    search: searchReducer,
    path: pathReducer
  },
});

export default appStore;
