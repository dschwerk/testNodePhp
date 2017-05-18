export const CL_LI_UPDATE_VALUE     = 'CL_LI_UPDATE_VALUE';
export const CL_LI_CLOSE            = 'CL_LI_CLOSE';
export const CL_LI_OPEN             = 'CL_LI_OPEN';
export const CL_LI_SET_DEFAULT      = 'CL_LI_SET_DEFAULT';
export const CL_LI_DRAG_START       = 'CL_LI_DRAG_START';
export const CL_LI_DRAG_END         = 'CL_LI_DRAG_END';
export const CL_LI_SET_IMG_LEFT     = 'CL_LI_SET_LEFT_IMG';
export const CL_LI_SET_IMG_RIGHT    = 'CL_LI_SET_RIGHT_IMG';
export const CL_LI_SET_IMG_INTRO    = 'CL_LI_SET_INTRO_IMG';

export function updateValue(newValue) {
    return {
        type: CL_LI_UPDATE_VALUE,
        payload: newValue
    };
}

export function close() {
    return { type: CL_LI_CLOSE };
}

export function open() {
    return { type: CL_LI_OPEN };
}

export function setDefault(closedValue, openedValue) {
    return { 
        type: CL_LI_SET_DEFAULT,
        payload: {
            closedValue: closedValue,
            openedValue: openedValue
        }
    };
}

export function dragStart(position) {
    return {
        type: CL_LI_DRAG_START,
        payload: position
    };
}

export function dragEnd(position) {
    return {
        type: CL_LI_DRAG_END,
        payload: position
    };
}

export function setImageLeft(imageData) {
    return {
        type: CL_LI_SET_IMG_LEFT,
        payload: imageData
    };
} 
export function setImageRight(imageData) {
    return {
        type: CL_LI_SET_IMG_RIGHT,
        payload: imageData
    };
} 
export function setImageIntro(imageData) {
    return {
        type: CL_LI_SET_IMG_INTRO,
        payload: imageData
    };
} 