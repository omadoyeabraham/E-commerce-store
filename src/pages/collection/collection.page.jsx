import React from "react";
import { connect } from "react-redux";

import ShopItem from "../../components/shop-item/shop-item.component";
import { selectProductCollectionById } from "../../store/products/products.selectors";

const CollectionPage = (props) => {
  const { collection } = props;
  return (
    <div>
      <h2 className="text-5xl text-center font-bold mb-8">
        {collection?.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 gap-2 mb-4">
        {!collection?.items?.length
          ? null
          : collection.items.map((item) => (
              <ShopItem key={item.id} item={item} />
            ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectProductCollectionById(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);
