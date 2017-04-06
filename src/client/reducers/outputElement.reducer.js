import { UPDATE_VALUE } from '../actions/outputElement.action';

function valueReducer(state = 'empty', action) {
    switch (action.type) {
        case UPDATE_VALUE:
            return action.value;
        default:
            return state;
    }
}