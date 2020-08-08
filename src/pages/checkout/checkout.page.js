// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.scss";
import { selectCartItems, selectCartItemsTotalAmount } from "../../store/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

const CheckoutPage = ({
  cartItems,
  cartTotalAmount,
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
                <CheckoutItem key={item.id} item={item}></CheckoutItem>
              ))
            )}
        </tbody>
      </table>

      {!cartItems.length ? null : (<div className="mt-8 text-right text-5xl font-bold">Total: ${cartTotalAmount}</div>)}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalAmount: selectCartItemsTotalAmount
});

export default connect(mapStateToProps)(CheckoutPage);
