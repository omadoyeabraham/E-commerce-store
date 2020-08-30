import React from "react";
import { connect } from "react-redux";
import "./shop-item.scss";
import { addItemToCart } from "../../../../store/cart/cart.actions";

/**
 * Component representing a single item that can be sold in the shop
 * @param {*} props
 * @type presentational component
 */
const ShopItem = ({ item, addToCart }) => {
  return (
    <div className="shop-item group shop-item relative mb-20 sm:mb-15 cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
        className="shop-item--image-background w-full h-full bg-center bg-cover group-hover:opacity-75"
      ></div>
      <div className="shop-item--name-and-price flex justify-between text-xl mt-1">
        <h4>{item.name}</h4>
        <h4>${item.price}</h4>
      </div>
      <div
        className="shop-item--button absolute bg-white p-4 text-center font-bold bottom-0 mb-5 mx-auto 
  w-9/12 left-0 right-0 opacity-0  transition-opacity duration-500 ease-in-out hover:bg-black hover:text-gray-100 group-hover:opacity-100"
        onClick={() => addToCart(item)}
      >
        ADD TO CART
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);
