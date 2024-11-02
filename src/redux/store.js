import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import shopReducer from "./shopSlice";
import authReducer from "./authenticationslice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    auth: authReducer
  },
});

export default store;
