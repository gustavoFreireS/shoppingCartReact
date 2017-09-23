import cartState from './cartState.js';
import listState from './listState.js';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    cartState, listState
});
export default rootReducer;
