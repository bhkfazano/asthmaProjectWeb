import { SET_TEAM, REMOVE_TEAM } from './types.js';

export function setTeam(values) {
    return {
        type: SET_TEAM,
        payload: values
    };
}

export function removeTeam(values) {
    return {
        type: REMOVE_TEAM,
        payload: values
    };
}