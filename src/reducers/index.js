import { combineReducers } from 'redux';
import { itemReducer } from './Item/Item';


export const rootReducer = combineReducers({
  item: itemReducer,

});
