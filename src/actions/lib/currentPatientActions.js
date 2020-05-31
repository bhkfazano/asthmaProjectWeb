import { SET_PATIENT, REMOVE_PATIENT } from './types.js';

export function setPatient(values) {
    return {
        type: SET_PATIENT,
        payload: values
    };
}

export function removePatient(values) {
    return {
        type: REMOVE_PATIENT,
        payload: values
    };
}