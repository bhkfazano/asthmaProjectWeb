import { SET_PATIENT, REMOVE_PATIENT } from '../../actions/index.js';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_PATIENT:
            return {...action.payload};
        case REMOVE_PATIENT:
            return {};
        default:
            return state;
    }
}
