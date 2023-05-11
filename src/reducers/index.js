import { combineReducers } from 'redux';
import { itemReducer } from './Item/Item';
import { authReducer } from './auth/auth';


export const rootReducer = combineReducers({
  item: itemReducer,
  auth: authReducer

});
