import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
};

export const basketSlice = createSlice({
   name: "basket",
   initialState,
   reducers: {
      // Actions
      addToBasket: (state, action) => {
         state.items = [...state.items, action.payload];
      },
      removeFromBasket: (state, action) => {
         let newBasket = [...state.items].filter((item) => item.id !== action.payload.id);

         state.items = [...newBasket];
      },
   },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) =>
   state.basket.items.reduce((total, item) => {
      return total + item.price;
   }, 0);

export default basketSlice.reducer;
