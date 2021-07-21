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
         const itemExists = state.items.find((item) => item.id === action.payload.id);

         if (itemExists) {
            itemExists.quantity++;
         } else {
            state.items.push({ ...action.payload, quantity: 1 });
         }
      },

      incrementQuantity: (state, action) => {
         const item = state.items.find((item) => item.id === action.payload.id);
         item.quantity++;
      },

      decrementQuantity: (state, action) => {
         const item = state.items.find((item) => item.id === action.payload.id);
         if (item.quantity === 1) {
            let newBasket = [...state.items].filter((item) => item.id !== action.payload.id);
            state.items = [...newBasket];
         } else {
            item.quantity--;
         }
      },

      removeFromBasket: (state, action) => {
         let newBasket = [...state.items].filter((item) => item.id !== action.payload.id);
         state.items = [...newBasket];
      },
   },
});

export const { addToBasket, incrementQuantity, decrementQuantity, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) =>
   state.basket.items.reduce((total, item) => {
      return total + item.price * item.quantity;
   }, 0);

export default basketSlice.reducer;
