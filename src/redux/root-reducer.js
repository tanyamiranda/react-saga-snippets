import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './take/app.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,           // The localStorage to use 
    whitelist: ['cart']     // reducers to persist in the localStore
}

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer); 

