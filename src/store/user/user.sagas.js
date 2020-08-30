import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActions, {
  signInSuccessAction,
  signInFailureAction,
  signOutFailureAction,
  signOutSuccessAction,
} from "./user.actions";
import {
  auth,
  googleAuthprovider,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import UserService from "../../services/users.service";

/**
 * The Root saga for users
 */
export function* userSagas() {
  yield all([
    call(onGoogleSignInStartSaga),
    call(onEmailSignInStartSaga),
    call(onCheckUserSessionSaga),
    call(onSignOutStartSaga),
  ]);
}

export function* onGoogleSignInStartSaga() {
  yield takeLatest(UserActions.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStartSaga() {
  yield takeLatest(UserActions.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSessionSaga() {
  yield takeLatest(UserActions.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStartSaga() {
  yield takeLatest(UserActions.SIGN_OUT_START, signOut);
}

// Generator function for user signin with Google
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleAuthprovider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    yield put(signOutFailureAction(error.message));
  }
}

export function* getSnapShotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(
      UserService.createAuthenticatedUserProfile,
      userAuth
    );
    const userSnapshot = yield userRef.get();

    yield put(
      signInSuccessAction({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    console.log(userAuth);
    if (!userAuth) return;

    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}
