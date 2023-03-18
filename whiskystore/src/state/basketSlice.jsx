import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = action.payload;
      const basketItem = state.basket.find((whisky) => whisky.id === item.id);

      // CreateSlice uses Immer which wraps objects in a proxy object -  if using console.log here then
      // need to use current() to get actual underlying objects (import from rtk above)
      if (basketItem) {
        basketItem.quantity++;
      } else {
        state.basket.push({ ...item, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const item = action.payload;
      const basketItem = state.basket.find((whisky) => whisky.id === item.id);
      if (basketItem.quantity === 1) {
        state.basket = state.basket.filter(
          (basketItem) => basketItem.id !== item.id
        );
      } else {
        basketItem.quantity--;
      }
    },
    removeFromBasket: (state, action) => {
      const item = action.payload;
      const basketItem = state.basket.find((whisky) => whisky.id === item.id);
      state.basket = state.basket.filter(
        (basketItem) => basketItem.id !== item.id
      );
    },
  },
});

export const { addToBasket, decreaseQuantity, removeFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
