import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectProductCollectionsAsArray } from "../../store/products/products.selectors";

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
  collections: selectProductCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
