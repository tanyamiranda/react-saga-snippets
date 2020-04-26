import UserActionTypes from './user.types';

export const fetchUserOrdersStart = (currentUser) => ({
    type : UserActionTypes.FETCH_ORDERS_START,
    payload: currentUser
});

export const fetchUserOrdersSuccess = (orderHistory) => ({
    type : UserActionTypes.FETCH_ORDERS_SUCCESS,
    payload: orderHistory
});

export const fetchUserOrdersFailure = (error) => ({
    type: UserActionTypes.FETCH_ORDERS_FAILURE,
    payload: error
});

export const signInUser = (email) => ({
    type: UserActionTypes.USER_SIGN_IN,
    payload: email
})

export const signOutUser = () => ({
    type: UserActionTypes.USER_SIGN_OUT
})