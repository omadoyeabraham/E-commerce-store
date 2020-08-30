/**
 * The actions for the user reducer in the store
 */
const UserActions = {
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
  SIGN_OUT_START: "SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
};

export const googleSignInStartAction = () => ({
  type: UserActions.GOOGLE_SIGN_IN_START,
});

export const emailSignInStartAction = (credentials) => ({
  type: UserActions.EMAIL_SIGN_IN_START,
  payload: credentials,
});

export const signInSuccessAction = (user) => ({
  type: UserActions.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailureAction = (errorMessage) => ({
  type: UserActions.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signOutStartAction = () => ({
  type: UserActions.SIGN_OUT_START,
});

export const signOutSuccessAction = () => ({
  type: UserActions.SIGN_OUT_SUCCESS,
});

export const signOutFailureAction = (errorMessage) => ({
  type: UserActions.SIGN_OUT_FAILURE,
  payload: errorMessage,
});

export const checkUserSessionAction = () => ({
  type: UserActions.CHECK_USER_SESSION,
});

export default UserActions;
