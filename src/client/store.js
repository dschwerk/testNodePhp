import { createStore, combineReducers } from 'redux';

import { valueReducer } from './reducers/outputElement.reducer';

const store = createStore(combineReducers({
    value: valueReducer.value
}));

export default store;