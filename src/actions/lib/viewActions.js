import { CHANGE_VIEW } from './types.js';

export function changeView(values) {
    return {
        type: CHANGE_VIEW,
        payload: values
    };
}
