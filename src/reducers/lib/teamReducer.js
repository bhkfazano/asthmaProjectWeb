import { SET_TEAM, REMOVE_TEAM } from '../../actions/index.js';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_TEAM:
            return [...action.payload.data];
        case REMOVE_TEAM:
            return {};
        default:
            return state;
    }
}
