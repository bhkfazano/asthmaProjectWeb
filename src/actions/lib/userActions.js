import { SET_USER, REMOVE_USER } from './types.js';

export function setUser(values) {
    return {
        type: SET_USER,
        payload: values
    };
}

export function removeUser(values) {
    return {
        type: REMOVE_USER,
        payload: values
    };
}

