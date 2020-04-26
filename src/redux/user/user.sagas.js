import {takeLatest, put, all, call} from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {fetchUserOrdersSuccess, fetchUserOrdersFailure} from './user.actions';

import {USER_ORDERS} from '../data/user.data'

export function* fetchUserOrders({payload: email}) {
    try {
        const orderList = USER_ORDERS.filter(order => order.email === email);
        yield put(fetchUserOrdersSuccess(orderList));
    }
    catch (error) {
        yield put(fetchUserOrdersFailure(error.message)); 	
    }
}	

export function* onSignInSuccessFetchOrders() {			
    yield takeLatest(
        UserActionTypes.USER_SIGN_IN, 			
        fetchUserOrders
    )
}

export function* onFetchUserOrdersStart() {		
    yield takeLatest(
        UserActionTypes.FETCH_ORDERS_START, 
        fetchUserOrders
    )
}

export function* userSagas() {
    yield all([
        call(onFetchUserOrdersStart),			
        call(onSignInSuccessFetchOrders)			
    ]);
}