import TakeActionTypes from './app.types';

const INITIAL_STATE = {
  value: 0,
  takeValue: 0 ,
  takeEveryValue: 0,
  takeLatestValue: 0
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case TakeActionTypes.SET_TAKE:
      return {
        ...state,
        takeValue: action.payload
      };
    case TakeActionTypes.SET_TAKEEVERY:
      return {
        ...state,
        takeEveryValue: action.payload
      };
    case TakeActionTypes.SET_TAKELATEST: 
      return {
        ...state,
        takeLatestValue: action.payload
      };

    case TakeActionTypes.INCREMENT:
    case TakeActionTypes.INCREMENT_TAKE:
    case TakeActionTypes.INCREMENT_TAKEEVERY:
    case TakeActionTypes.INCREMENT_TAKELATEST: 
    case TakeActionTypes.INCREMENT_FROM_SAGA: 
      return {
        ...state,
        value: state.value + 1
      };
    case TakeActionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case TakeActionTypes.RESET:
      return {
        ...state,
        value: 0
      };
    default:
      return state;
  }
};

export default appReducer;
