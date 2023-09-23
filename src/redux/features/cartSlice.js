import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.find((item) => item.id === productToAdd.id);

      if (existingProduct) {
        // Return a new state array with the quantity updated
        return state.map((item) =>
          item.id === existingProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Return a new state array with the new product added
        return [...state, { ...productToAdd, quantity: 1 }];
      }
    },
    remove: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.find((item) => item.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // Return a new state array with the quantity decreased
          return state.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // Return a new state array with the product removed
          return state.filter((item) => item.id !== productId);
        }
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice;
