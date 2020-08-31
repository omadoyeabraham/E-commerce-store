import UserActions from "./user.actions";

const INITIAL_USER_STATE = {
  currentUser: null,
  isAuthenticating: false,
  authenticationErrorMessage: null,
};

/**
 * User Reducer
 */
const UserReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActions.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isAuthenticating: true,
      };

    case UserActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        authenticationErrorMessage: null,
        isAuthenticating: false,
      };

    case UserActions.SIGN_IN_FAILURE:
    case UserActions.SIGN_OUT_FAILURE:
    case UserActions.SIGN_UP_FAILURE:
      return {
        ...state,
        authenticationErrorMessage: action.payload,
        isAuthenticating: false,
      };

    case UserActions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        authenticationErrorMessage: null,
      };

    default:
      return state;
  }
};

export default UserReducer;
