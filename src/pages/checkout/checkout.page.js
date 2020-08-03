// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.scss";
import { selectCartItems } from "../../store/cart/cart.selectors";
import {
  removeItemFromCart,
  deleteItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.actions";

const CheckoutPage = ({
  cartItems,
  removeFromCart,
  deleteFromCart,
  addToCart,
}) => {
  return (
    <div className="checkout-page">
      <table className="checkout-page--table w-full">
        <thead className="text-2xl border-b-2 border-gray-400 pb-10">
          <tr>
            <th className="text-left py-4">Product</th>
            <th className="text-left">Description</th>
            <th className="text-left"> Quantity</th>
            <th className="text-left">Price</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>

        <tbody>
          {!cartItems.length ? (
            <tr className="border-b-2 border-gray-400">
              <td className="text-center text-3xl font-bold h-56" colSpan="5">
                No Items in your cart
              </td>
            </tr>
          ) : (
            cartItems.map((item) => (
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
                    &uArr;
                  </span>
                  <span className="mx-4">{item.quantity}</span>
                  <span
                    className="font-extrabold text-3xl cursor-pointer"
                    onClick={() => removeFromCart(item)}
                  >
                    &dArr;
                  </span>
                </td>
                <td>${item.price}</td>
                <td className="text-center font-extrabold text-3xl cursor-pointer">
                  <span onClick={() => deleteFromCart(item)}>&#9747;</span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (item) => dispatch(removeItemFromCart(item)),
  deleteFromCart: (item) => dispatch(deleteItemFromCart(item)),
  addToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
