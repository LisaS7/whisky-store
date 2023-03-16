import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = action.payload;
      const basketItem = state.basket.find((x) => x.id === item.id);

      // CreateSlice uses Immer which wraps objects in a proxy object -  if using console.log here then
      // need to use current() to get actual underlying objects (import from rtk above)
      if (basketItem) {
        const index = state.basket.indexOf(item);
        state.basket.splice(index);

        const newItem = { ...basketItem };
        newItem.quantity++;
        state.basket.push(newItem);
      } else {
        item.quantity = 1;
        state.basket.push(item);
      }
    },
    removeFromBasket: (state, action) => {
      const item = action.payload;
      state.basket = state.basket.filter(
        (basketItem) => basketItem.id !== item.id
      );
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
