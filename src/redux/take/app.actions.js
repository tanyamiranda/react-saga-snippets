import TakeActionTypes from './app.types';

export const executeTakeAction = (actionTypeText, value) => ({
    type : actionTypeText,
    payload: value
});

export const setTakeValue = (value) => ({
    type : TakeActionTypes.SET_TAKE,
    payload: value
});

export const setTakeEveryValue = (value) => ({
    type : TakeActionTypes.SET_TAKEEVERY,
    payload: value
});

export const setTakeLatestValue = (value) => ({
    type : TakeActionTypes.SET_TAKELATEST,
    payload: value
});