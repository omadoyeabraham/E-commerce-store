import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsAsArray } from "../../store/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div>
    <h1 className="text-5xl font-extrabold mb-4">Collections</h1>
    {collections.map((collection) => (
      <CollectionPreview
        key={collection.id}
        collection={collection}
      ></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
