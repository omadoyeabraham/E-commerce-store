import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActions from "../user/user.actions";
import { clearCartAction } from "./cart.actions";

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActions.SIGN_OUT_SUCCESS, clearCart);
}

export function* clearCart() {
  yield put(clearCartAction());
}
