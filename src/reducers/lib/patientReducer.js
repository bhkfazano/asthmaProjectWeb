import { SET_PATIENTS, REMOVE_PATIENTS } from '../../actions/index.js';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_PATIENTS:
            return [...action.payload];
        case REMOVE_PATIENTS:
            return {};
        default:
            return state;
    }
}
