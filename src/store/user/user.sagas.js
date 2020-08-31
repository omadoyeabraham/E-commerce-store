import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActions, {
  signInSuccessAction,
  signInFailureAction,
  signOutFailureAction,
  signOutSuccessAction,
  signUpFailureAction,
  signUpSuccessAction,
} from "./user.actions";
import {
  auth,
  googleAuthprovider,
  getCurrentUser,
} from "../../modules/firebase/firebase.utils";
import AuthService from "../../modules/auth/services/auth.service";

/**
 * The Root saga for users
 */
export function* userSagas() {
  yield all([
    call(onGoogleSignInStartSaga),
    call(onEmailSignInStartSaga),
    call(onCheckUserSessionSaga),
    call(onSignOutStartSaga),
    call(onSignUpStartSaga),
    call(onSignUpSuccessSaga),
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

export function* onSignUpStartSaga() {
  yield takeLatest(UserActions.SIGN_UP_START, signUp);
}

export function* onSignUpSuccessSaga() {
  yield takeLatest(UserActions.SIGN_UP_SUCCESS, signInAfterSignUp);
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

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccessAction({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailureAction(error.message));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      AuthService.createAuthenticatedUserProfile,
      userAuth,
      additionalData
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
    if (!userAuth) return;

    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailureAction(error.message));
  }
}
