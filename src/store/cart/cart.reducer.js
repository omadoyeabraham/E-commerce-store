import { CartActionTypes } from "./cart.actions";
import {
  addItemToCart,
  removeItemFromCart,
  deleteItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

/**
 * Reducer for the shopping cart state
 * @param {*} state
 * @param {*} action
 */
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };

    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };

    case CartActionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        items: deleteItemFromCart(state.items, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
