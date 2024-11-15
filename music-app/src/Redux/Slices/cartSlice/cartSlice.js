import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const cartItem = action.payload;

      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === cartItem.id
      );
      console.log(existingCartItemIndex);
      if (existingCartItemIndex !== -1) {
        cartItem.quantity++;
        state.cart[existingCartItemIndex] = cartItem;
      } else state.cart.push(cartItem);
    },
    removeItemFromCart(state, action) {
      const cartItem = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === cartItem.id);
      state.cart = state.cart.filter((item) => item.id !== cartItem.id);
    },
    increaseItemQuantity(state, action) {
      const cartItem = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === cartItem.id);
      state.cart[itemIndex].quantity++;
    },
    decreaseItemQuantity(state, action) {
      const cartItem = action.payload;

      const itemIndex = state.cart.findIndex((item) => item.id === cartItem.id);
      if (state.cart[itemIndex].quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== cartItem.id);
      } else {
        state.cart[itemIndex].quantity--;
      }
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} = cartSlice.actions;
