export const UPDATE_VALUE = 'UPDATE_VALUE';

export function updateValue(outputValue) {
    return {
        type: UPDATE_VALUE,
        outputValue
    };
}