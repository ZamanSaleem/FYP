import { createSlice } from "@reduxjs/toolkit";
import all_product from "../data/all_product";

const initialState = {
  products: all_product,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.products =
        category === "all"
          ? all_product
          : all_product.filter((product) => product.category === category);
    },
  },
});

export const { filterByCategory } = storeSlice.actions;
export default storeSlice.reducer;
