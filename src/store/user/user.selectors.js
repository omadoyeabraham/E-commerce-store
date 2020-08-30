import { createSelector } from "reselect";

export const selectUserState = (state) => state.user;

// Selector to get current user
export const selectCurrentUser = createSelector(
  [selectUserState],
  (userState) => userState.currentUser
);

export const selectIsAuthenticating = createSelector(
  [selectUserState],
  (userState) => userState.isAuthenticating
);
