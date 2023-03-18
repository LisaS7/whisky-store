import { createSlice, current } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = {
  products: products,
  display: products,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    titleSearch: (state, action) => {
      const searchWord = action.payload;
      state.display = state.products.filter((product) =>
        product.name.toLowerCase().includes(searchWord.toLowerCase())
      );
    },
    filterByRegion: (state, action) => {
      const region = action.payload;
      state.products.filter((item) => item.region === region);
    },
    reset: (state) => {
      state.products = initialState;
    },
  },
});

export const { titleSearch, filterByRegion, reset } = productSlice.actions;
export default productSlice.reducer;
