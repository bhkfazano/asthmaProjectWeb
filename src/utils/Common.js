export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
}

export const storeState = (view, user, patients) => {
    if (view) sessionStorage.setItem('view', view);
    if (user) sessionStorage.setItem('userData', JSON.stringify(user));
    if (patients) sessionStorage.setItem('patients', JSON.stringify(patients));
}

export const retrieveState = () => {
    const view = sessionStorage.getItem('view');
    const user = JSON.parse(sessionStorage.getItem('userData'));
    return { view, user };
}

export const resetState = () => {
    sessionStorage.removeItem('view');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('patients');
}


