import React from "react";
import { Link } from "react-router-dom";

import ShopItem from "../../../shop/components/shop-item/shop-item.component";

/**
 * A preview for a collection of items e.g. a collection of hats, sneakers e.t.c
 *
 * @param {*} param0
 * @type presentational component
 */
const CollectionPreview = ({ collection: { id, title, routeName, items } }) => {
  const previewItems = items.length >= 4 ? items.slice(0, 4) : items;

  return (
    <div>
      <Link
        to={`shop/${title.toLowerCase()}`}
        className="text-3xl text-gray-700 mb-2 font-bold cursor-pointer"
      >
        {title}
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 gap-2 mb-4">
        {previewItems.map((item) => (
          <ShopItem key={item.id} item={item}></ShopItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
