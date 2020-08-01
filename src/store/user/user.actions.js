/**
 * The actions for the user reducer in the store
 */
const UserActions = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

/**
 * Action creator for setting current user
 * @param {*} payload
 */
export const setCurrentUser = (user) => ({
  type: UserActions.SET_CURRENT_USER,
  payload: user,
});

export default UserActions;
