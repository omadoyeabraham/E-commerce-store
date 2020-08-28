import { takeEvery } from "redux-saga/effects";

import { SHOP_ACTIONS } from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
}

export function* fetchShopCollectionsStartSaga() {
  yield takeEvery(
    SHOP_ACTIONS.FETCH_SHOP_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
