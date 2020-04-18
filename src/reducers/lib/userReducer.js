import { SET_USER, REMOVE_USER } from '../../actions/index.js';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return {...action.payload};
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}
