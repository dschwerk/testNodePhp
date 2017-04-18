import { createStore, combineReducers } from 'redux';

import { valueReducer } from './reducers/outputElement.reducer';

const store = createStore(combineReducers({
    outputValue: valueReducer
}));

export default store;