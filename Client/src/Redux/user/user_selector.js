import { createSelector } from 'reselect';
const selectUser = state => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.userID
);
const selectAdmin = state => state.admin;
export const selectCurrentAdmin = createSelector(
  [selectAdmin],
  user => user.adminID
);
