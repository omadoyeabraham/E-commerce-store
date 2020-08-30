import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore } from "../../modules/firebase/firebase.utils";
import { convertCollectionSnapShotToMap } from "../../modules/firebase/data.utils";

import {
  SHOP_ACTIONS,
  fetchShopCollectionsSuccessAction,
  fetchShopCollectionsFailureAction,
} from "./shop.actions";

export function* shopSagas() {
  yield all([call(fetchShopCollectionsStartSaga)]);
}

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapShotToMap, snapshot);
    yield put(fetchShopCollectionsSuccessAction(collectionsMap));
  } catch (error) {
    yield put(fetchShopCollectionsFailureAction(error.message));
  }
}

/**
 * Saga for Fetching the collections
 */
export function* fetchShopCollectionsStartSaga() {
  yield takeLatest(
    SHOP_ACTIONS.FETCH_SHOP_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
