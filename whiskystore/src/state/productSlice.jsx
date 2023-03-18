import { createSlice, current } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = {
  products: products,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByRegion: (state, action) => {
      const region = action.payload;
      state.products.filter((item) => item.region === region);
    },
    reset: (state) => {
      state.products = initialState;
    },
  },
});

export default productSlice.reducer;
