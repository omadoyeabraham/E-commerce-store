import React from "react";
import "./shop-item.scss";

/**
 * Component representing a single item that can be sold in the shop
 * @param {*} props
 * @type presentational component
 */
const ShopItem = ({ item: { id, imageUrl, name, price } }) => {
  return (
    <div className="group shop-item relative mb-20 sm:mb-15 cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="w-full h-full bg-center bg-cover group-hover:opacity-75"
      ></div>
      <div className="flex justify-between text-xl mt-1">
        <h4>{name}</h4>
        <h4>${price}</h4>
      </div>
      <div
        className="absolute bg-white p-4 text-center font-bold bottom-0 mb-5 mx-auto hover:bg-black hover:text-gray-100
      w-9/12 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
      >
        ADD TO CART
      </div>
    </div>
  );
};

export default ShopItem;
