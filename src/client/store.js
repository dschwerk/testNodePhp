import { createStore, combineReducers } from 'redux';
import { valueReducer } from './reducers/outputElement.reducer';
import { clearanceLimiterReducer } from './reducers/clearanceLimiter.reducer';

const store = createStore(combineReducers({
    outputValue: valueReducer,
    clearanceLimiter: clearanceLimiterReducer
}));

export default store;