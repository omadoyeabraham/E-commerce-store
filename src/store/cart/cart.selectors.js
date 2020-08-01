import { createSelector } from "reselect";

export const selectCartState = (state) => state.cart;

// Selector for getting cart items
export const selectCartItems = createSelector(
  [selectCartState],
  (cartState) => cartState.items
);

// Selector for getting total quantity of items in cart
export const selectCartItemsTotalQuantity = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);
