import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import userSET from './user/reducers';
import AdminSET from './Admin/reducers';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user','admin']
};
const rootReducer = combineReducers({
  user:userSET,
  admin:AdminSET
});
export default persistReducer(persistConfig, rootReducer);