/**
 * Add a new item to cart
 *
 * @param {*} cartItems
 * @param {*} newItem
 */
export const addItemToCart = (cartItems, newItem) => {
  const isExistingCartItem = cartItems.find((item) => item.id === newItem.id);

  if (isExistingCartItem) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

/**
 * Completely delete an item from the cart.
 *
 * @param {*} cartItems
 * @param {*} item
 */
export const deleteItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

/**
 * Reduce the quantity of an item in the cart, and completely remove it if the quantity is 0
 *
 * @param {*} cartItems
 * @param {*} item
 */
export const removeItemFromCart = (cartItems, item) => {
  if (item.quantity - 1 <= 0) return deleteItemFromCart(cartItems, item);

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
