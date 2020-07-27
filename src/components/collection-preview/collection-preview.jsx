import React from "react";

import ShopItem from "../shop-item/shop-item.component";

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
      <h2 className="text-3xl text-gray-700 mb-2">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 gap-2 mb-4">
        {previewItems.map((item) => (
          <ShopItem key={item.id} item={item}></ShopItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
