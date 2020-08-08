// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.scss";
import {
  selectCartItems,
  selectCartItemsTotalAmount,
} from "../../store/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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

      {!cartItems.length ? null : (
        <div>
          <div className="mt-8 text-right text-5xl font-bold">
            Total: ${cartTotalAmount}
          </div>
          <StripeCheckoutButton price={cartTotalAmount}></StripeCheckoutButton>
          <div className="bg-red-300 font-semibold mt-8 p-8 text-4xl rounded-lg">
            *Please use the following test credit card for payment*
            <ul className="mt-4 text-3xl">
              <li>Card Number: 4242 4242 4242 4242</li>
              <li>Expiry Date: 01/21</li>
              <li>CVV: 123</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalAmount: selectCartItemsTotalAmount,
});

export default connect(mapStateToProps)(CheckoutPage);
