import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/images/shopping-bag.svg";

/**
 * Icon in the navbar which shows the total number in the cart, and can be clicked on to reveal further details
 *
 * @param {*} param0
 * @type presentational component
 */
const CartIcon = ({ numberOfCartItems, handleClick }) => (
  <div
    style={{
      width: "45px",
      height: "45px",
    }}
    className="ml-4 relative flex justify-center items-center cursor-pointer"
    onClick={handleClick}
  >
    <ShoppingBagIcon
      style={{
        width: "25px",
        height: "25px",
      }}
    ></ShoppingBagIcon>
    <div
      style={{
        bottom: "10px",
      }}
      className="absolute text-sm"
    >
      {numberOfCartItems}
    </div>
  </div>
);

export default CartIcon;
