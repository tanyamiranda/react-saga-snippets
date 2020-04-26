import {all, call} from 'redux-saga/effects';

import {takeSagas} from './take/app.sagas';
import {userSagas} from './user/user.sagas';

export default function* rootSaga() {
    yield all([      
        call(takeSagas),
        call(userSagas)
    ]);
}