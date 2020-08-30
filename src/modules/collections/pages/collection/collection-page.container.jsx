import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetchingCollections } from "../../../../store/shop/shop.selectors";

import CollectionPage from "./collection.page";
import withLoadingSpinner from "../../../common/components/with-loading-spinner/with-loading-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollections,
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withLoadingSpinner
)(CollectionPage);

export default CollectionPageContainer;
