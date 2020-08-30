export const CartActionTypes = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
  CHECKOUT_CART: "CHECKOUT_CART",
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
  CLEAR_CART: "CLEAR_CART",
};

/**
 * Action creator for adding items to cart
 * @param {*} item
 */
export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

/**
 * Action creator for toggling the visibility of the cart dropdown in the navigation bar
 */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/**
 * Action creator for deleting an item from the cart
 * @param {*} item
 */
export const deleteItemFromCart = (item) => ({
  type: CartActionTypes.DELETE_ITEM_FROM_CART,
  payload: item,
});

/**
 * Action creator for removing an item from the cart
 * @param {*} item
 */
export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const clearCartAction = () => ({
  type: CartActionTypes.CLEAR_CART,
});
