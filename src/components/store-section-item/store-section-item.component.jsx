import React from "react";

/**
 * Component for each store category of items on the homepage
 *
 * @param {*} props
 * @type presentational component
 */
const StoreSectionItem = ({ title, imageUrl }) => {
  return (
    <div className="store-section group border border-gray-700 flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="store-section--image transform hover:scale-110 transition duration-500 ease-in-out"
      ></div>
      <div className="store-section--content border border-gray-200 py-6 px-8 bg-white opacity-75 group-hover:opacity-100 absolute">
        <h1 className="store-section--title text-4xl font-bold uppercase">
          {title}
        </h1>
        <span className="store-section--subtitle block uppercase">
          SHOP NOW
        </span>
      </div>
    </div>
  );
};

export default StoreSectionItem;
