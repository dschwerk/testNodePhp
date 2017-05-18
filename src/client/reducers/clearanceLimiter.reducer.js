import { CL_LI_OPEN, CL_LI_CLOSE
    , CL_LI_UPDATE_VALUE, CL_LI_SET_DEFAULT
    , CL_LI_DRAG_START, CL_LI_DRAG_END 
    , CL_LI_SET_IMG_INTRO, CL_LI_SET_IMG_LEFT, CL_LI_SET_IMG_RIGHT
} from '../actions/clearanceLimiter.action';

import Img from 'react-image';

const initialState = {
    default: {
        opened: '10%',
        closed: '100%'
    },
    dragStart: 0,    
    value: '100%',
    width: 0,
    height: 0,
    imageLeft: null,
    imageRight: null,
    imageIntro: null
};

export function clearanceLimiterReducer(state = initialState, action) {
    switch (action.type) {
    case CL_LI_OPEN:
        return state.set('value', state.default.opened);
    case CL_LI_CLOSE:
        return state.set('value', state.default.closed);
    case CL_LI_UPDATE_VALUE:
        return state.set('value', action.payload.value);
    case CL_LI_SET_DEFAULT:
        return state.set('default', action.payload.default);
    case CL_LI_DRAG_START:
        return state.set('dragStart', action.payload.position);
    case CL_LI_DRAG_END: {
        const newPosition = state.dragStart - action.payload.position;        
        return state.set('value', newPosition);
    }
    case CL_LI_SET_IMG_INTRO: {
        const imgPath = action.payload.imageData;
        const img = () => 
            <Img
                src={imgPath}
                loader={<div>LOADING...</div>}
            />
        return state.set('imageIntro', img);
    }
    case CL_LI_SET_IMG_LEFT: {
        const imgPath = action.payload.imageData;
        const img = () => <Img src={imgPath} />
        return state.set('imageLeft', img);
    }
    case CL_LI_SET_IMG_RIGHT: {
        const imgPath = action.payload.imageData;
        const img = () => <Img src={imgPath} />
        return state.set('imageRight', img);
    }
    default:
        return state;
    }
}