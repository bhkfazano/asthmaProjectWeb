import { SET_PACIENTS, REMOVE_PACIENTS } from './types.js';

export function setPacients(values) {
    return {
        type: SET_PACIENTS,
        payload: values
    };
}

export function removePacients(values) {
    return {
        type: REMOVE_PACIENTS,
        payload: values
    };
}