import UserActions from "./user.actions";

const INITIAL_USER_STATE = {
  currentUser: null,
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

    default:
      return state;
  }
};

export default UserReducer;
