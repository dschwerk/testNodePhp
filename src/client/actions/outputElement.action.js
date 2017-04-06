export const UPDATE_VALUE = 'UPDATE_VALUE';

export function updateValue(value) {
    return {
        type: UPDATE_VALUE,
        value: value
    };
}