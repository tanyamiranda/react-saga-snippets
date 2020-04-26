import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectOrderHistory = createSelector (
    [selectUser],
    user => user.orderHistory
);

export const selectCurrentUser = createSelector (
    [selectUser],
    user => user.currentUser
);
