import React from 'react'
import { connect } from 'react-redux'

import {
  removeItemFromCart,
  deleteItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.actions";

/**
 * Single row for displaying data about an item in the checkout page
 * 
 * @param {*} param0 
 */
const CheckoutItem = ({ item, addToCart, removeFromCart, deleteFromCart }) => {
  return (
    <tr key={item.id} className="text-2xl border-b-2 border-gray-400">
      <td>
        <img
          src={item.imageUrl}
          className="checkout-page--item-image bg-cover bg-center my-4"
        />
      </td>
      <td>{item.name}</td>
      <td>
        <span
          className="font-extrabold text-3xl cursor-pointer"
          onClick={() => addToCart(item)}
        >
          &#10094;
                  </span>
        <span className="mx-4">{item.quantity}</span>
        <span
          className="font-extrabold text-3xl cursor-pointer"
          onClick={() => removeFromCart(item)}
        >
          &#10095;
                  </span>
      </td>
      <td>${item.price}</td>
      <td className="text-center font-extrabold text-3xl cursor-pointer">
        <span onClick={() => deleteFromCart(item)}>&#9747;</span>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => dispatch(removeItemFromCart(item)),
  deleteFromCart: (item) => dispatch(deleteItemFromCart(item)),
  addToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);