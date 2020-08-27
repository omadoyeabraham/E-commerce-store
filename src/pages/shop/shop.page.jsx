import React from "react";
import { Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../store/products/products.actions";
import { selectIsFetchingCollections } from "../../store/products/products.selectors";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";
import withLoadingSpinnerComponent from "../../components/with-loading-spinner/with-loading-spinner.component";

const CollectionsOverviewWithSpinner = withLoadingSpinnerComponent(
  CollectionsOverview
);

const CollectionPageWithSpinner = withLoadingSpinnerComponent(CollectionPage);

/**
 * The main shop page located at /shop
 *
 * @type container component
 */
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  // componentWillUpdate() {
  //   fetchCollectionsStartAsync();
  // }

  render() {
    const { match, isCollectionsFetching } = this.props;

    return (
      <div className="py-10">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionsOverviewWithSpinner
                isLoading={isCollectionsFetching}
                {...props}
              />
            )}
          ></Route>
          <Route
            exact
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner
                isLoading={isCollectionsFetching}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsFetchingCollections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
