import { SET_PATIENTS, REMOVE_PATIENTS } from './types.js';

export function setPatients(values) {
    return {
        type: SET_PATIENTS,
        payload: values
    };
}

export function removePatients(values) {
    return {
        type: REMOVE_PATIENTS,
        payload: values
    };
}