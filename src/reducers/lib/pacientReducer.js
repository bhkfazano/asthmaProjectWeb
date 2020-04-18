import { SET_PACIENTS, REMOVE_PACIENTS } from '../../actions/index.js';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_PACIENTS:
            return [...action.payload];
        case REMOVE_PACIENTS:
            return {};
        default:
            return state;
    }
}
