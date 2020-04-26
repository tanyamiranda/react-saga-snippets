import {take, takeEvery, takeLatest, delay, put, call, all} from 'redux-saga/effects';

import TakeActionTypes from './app.types';

//import {selectAppValue} from './app.selectors'

export function* incrementFromSaga() {
  console.log("incrementFromSaga() started.");
  yield delay(3000); // 3-second delay to demonstrate SAGA control
  yield put({ type: TakeActionTypes.INCREMENT_FROM_SAGA });
  console.log("incrementFromSaga() completed.")
}

export function* incrementTakeLatestSetup() {
  //console.log("incrementTakeLatestSetup()...");
  yield takeLatest(TakeActionTypes.INCREMENT_TAKELATEST, incrementFromSaga);
}

export function* incrementTakeSetup() {
  //console.log("incrementTakeSetup()...");
  yield take(TakeActionTypes.INCREMENT_TAKE);
  yield incrementFromSaga();
}

export function* incrementTakeEverySetup() {
  //console.log("incrementTakeSetup()...");
  yield takeEvery(TakeActionTypes.INCREMENT_TAKEEVERY, incrementFromSaga);
}

export function* takeSagas() {
  yield all([
      call(incrementTakeEverySetup),			
      call(incrementTakeSetup),
      call(incrementTakeLatestSetup)
  ]);
}