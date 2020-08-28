import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetchingCollections } from "../../store/shop/shop.selectors";

import CollectionsOverview from "./collections-overview.component";
import withLoadingSpinner from "../with-loading-spinner/with-loading-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollections,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withLoadingSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
