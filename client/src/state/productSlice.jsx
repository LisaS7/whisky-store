import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  products: [],
  display: [],
  filters: {
    search: "",
    region: "All",
    flavours: [],
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.display = action.payload;
      productSlice.caseReducers.setFlavours(state);
    },
    setFlavours: (state) => {
      state.filters.flavours = [
        ...new Set(state.products.map((product) => product.flavours).flat()),
      ];
    },
    selectAllFlavours: (state) => {
      productSlice.caseReducers.setFlavours(state);
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

      state.display = state.products.filter((product) =>
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
      state.filters = { search: "", region: "All", flavours: [] };
      productSlice.caseReducers.setFlavours(state);
      state.display = state.products;
    },
  },
});

export const {
  setProducts,
  filterProducts,
  toggleFlavours,
  selectAllFlavours,
  unselectAllFlavours,
  reset,
} = productSlice.actions;

export default productSlice.reducer;
