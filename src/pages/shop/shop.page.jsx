import React from "react";
import { Route, Switch } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.page";

/**
 * The main shop page located at /shop
 *
 * @type container component
 */
const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="py-10">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverview}
        ></Route>
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
};

export default ShopPage;
