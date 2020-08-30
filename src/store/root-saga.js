import { all, call } from "redux-saga/effects";
import { fetchShopCollectionsStartSaga } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchShopCollectionsStartSaga)]);
}
