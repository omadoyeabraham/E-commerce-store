import React from "react";
import { withRouter } from "react-router-dom";

/**
 * Dropdown which shows all the items in the cart from the navigation bar
 *
 * @param {*} param0
 * @type presentational component
 */
const CartDropdown = ({ cartItems, history }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "450px",
        bottom: "-460px",
        right: "10px",
      }}
      className="absolute bg-gray-200 z-10 border border-gray-800 p-4"
    >
      <div className="relative flex flex-col justify-between w-full h-full">
        <div className="cart-items overflow-y-scroll">
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} className="flex items-center">
              <div
                style={{
                  backgroundImage: `url(${cartItem.imageUrl})`,
                  width: "100px",
                  height: "130px",
                }}
                className="bg-cover bg-center my-3"
              ></div>
              <div className="ml-8">
                <h3>{cartItem.title}</h3>
                <h3>
                  <span className="mx-4">{cartItem.quantity}</span> x
                  <span className="mx-4">${cartItem.price}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-10 text-center text-semibold">
            NO ITEMS IN CART
          </div>
        ) : null}

        <div className="w-full">
          <button
            className="w-full mt-4 bg-transparent hover:bg-gray-900 text-gray-900 
        font-bold uppercase hover:text-white py-4 px-4 border border-gray-900 hover:border-transparent"
            onClick={() => history.push("/checkout")}
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CartDropdown);
