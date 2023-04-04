import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  products: [],
  display: [],
  allFlavours: [],
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
      state.allFlavours = [
        ...new Set(state.products.map((product) => product.flavours).flat()),
      ];
      state.filters.flavours = state.allFlavours;
    },
    selectAllFlavours: (state) => {
      state.filters.flavours = state.allFlavours;
      productSlice.caseReducers.filterProducts(state); // applies the filters
    },
    unselectAllFlavours: (state) => {
      state.filters.flavours = [];
      productSlice.caseReducers.filterProducts(state); // applies the filters
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

      // search box
      state.display = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.filters.search.toLowerCase())
      );

      // regions
      if (state.filters.region !== "All") {
        state.display = state.display.filter(
          (item) => item.region === state.filters.region
        );
      }

      // flavours
      for (const product of state.display) {
        const productIncludesFlavours = product.flavours.some((flavour) => {
          return state.filters.flavours.includes(flavour);
        });
        if (!productIncludesFlavours) {
          state.display = state.display.filter((item) => item !== product);
        }
      }
    },
    reset: (state) => {
      state.filters = {
        search: "",
        region: "All",
        flavours: state.allFlavours,
      };
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
