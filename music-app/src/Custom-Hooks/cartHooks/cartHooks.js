import {
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from "../../Redux/Slices/cartSlice/cartSlice";

import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addItemToCartHandler = (cartItem) => {
    dispatch(addItemToCart(cartItem));
  };

  const decreaseItemQuantityHandler = (cartItem) => {
    dispatch(decreaseItemQuantity(cartItem));
  };

  const increaseItemQuantityHandler = (cartItem) => {
    dispatch(increaseItemQuantity(cartItem));
  };

  const removeItemFromCartHandler = (cartItem) => {
    dispatch(removeItemFromCart(cartItem));
  };

  return {
    cart,
    addItemToCartHandler,
    decreaseItemQuantityHandler,
    increaseItemQuantityHandler,
    removeItemFromCartHandler,
  };
};
