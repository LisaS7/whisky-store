import { createSlice, current } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = {
  products: products,
  display: products,
  filters: {
    search: "",
    region: "All",
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { filterType, filterValue } = action.payload;
      state.filters[filterType] = filterValue;

      state.display = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.filters.search.toLowerCase())
      );

      if (state.filters.region !== "All") {
        state.display = state.display.filter(
          (item) => item.region === state.filters.region
        );
      }
    },
    reset: (state) => {
      state.filters = { search: "", region: "All" };
      state.display = products;
    },
  },
});

export const { filterProducts, reset } = productSlice.actions;
export default productSlice.reducer;
