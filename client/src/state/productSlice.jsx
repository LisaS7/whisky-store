import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { products } from "../data/products";
import { getProducts } from "../ProductService";

const getWhiskies = createAsyncThunk("whiskies/fetchWhiskies", async () => {
  return await getProducts();
});

console.log(products);
console.log(getWhiskies);

const flavours = [
  ...new Set(products.map((product) => product.flavours).flat()),
];

const initialState = {
  products: { whiskies: [], status: "idle", error: null },
  display: products.whiskies,
  filters: {
    search: "",
    region: "All",
    flavours: flavours,
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectAllFlavours: (state) => {
      state.filters.flavours = flavours;
      productSlice.caseReducers.filterProducts(state); // calls the filterProducts function below to apply the filters
    },
    unselectAllFlavours: (state) => {
      state.filters.flavours = [];
      productSlice.caseReducers.filterProducts(state); // calls the filterProducts function below to apply the filters
    },
    toggleFlavours: (state, action) => {
      const { flavour, checked } = action.payload;
      if (checked) {
        state.filters.flavours = [
          ...new Set([...state.filters.flavours, flavour]),
        ];
      } else {
        state.filters.flavours = state.filters.flavours.filter(
          (item) => item !== flavour
        );
      }
      productSlice.caseReducers.filterProducts(state);
    },
    filterProducts: (state, action) => {
      if (action) {
        const { filterType, filterValue } = action.payload;
        state.filters[filterType] = filterValue;
      }

      state.display = state.products.whiskies.filter((product) =>
        product.name.toLowerCase().includes(state.filters.search.toLowerCase())
      );

      if (state.filters.region !== "All") {
        state.display = state.display.filter(
          (item) => item.region === state.filters.region
        );
      }

      for (const product of state.display) {
        const inFilter = product.flavours.some((flavour) => {
          return state.filters.flavours.includes(flavour);
        });
        if (!inFilter) {
          state.display = state.display.filter((item) => item !== product);
        }
      }
    },
    reset: (state) => {
      state.filters = { search: "", region: "All" };
      state.display = products;
    },
  },
});

export const {
  filterProducts,
  toggleFlavours,
  selectAllFlavours,
  unselectAllFlavours,
  reset,
} = productSlice.actions;
export default productSlice.reducer;
export const getAllWhiskies = (state) => state.products.whiskies;
