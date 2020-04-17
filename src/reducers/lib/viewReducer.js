import { CHANGE_VIEW } from '../../actions/index.js';

export default function (state = {}, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return action.payload;
        default:
            return state;
    }
}
