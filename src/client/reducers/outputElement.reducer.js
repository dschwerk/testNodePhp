import { UPDATE_VALUE } from '../actions/outputElement.action';

export function valueReducer(state = 'empty', action) {
    switch (action.type) {
        case UPDATE_VALUE:
            return action.outputValue;
        default:
            return state;
    }
}