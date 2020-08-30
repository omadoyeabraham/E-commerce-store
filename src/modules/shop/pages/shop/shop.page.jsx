import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../../collections/components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../../../collections/pages/collection/collection-page.container";
import { fetchShopCollectionsStartAction } from "../../../../store/shop/shop.actions";

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

  render() {
    const { match } = this.props;

    return (
      <div className="py-10">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
          ></Route>
          <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchShopCollectionsStartAction()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
