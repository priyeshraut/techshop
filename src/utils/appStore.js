import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    search: searchReducer,
  },
});

export default appStore;
