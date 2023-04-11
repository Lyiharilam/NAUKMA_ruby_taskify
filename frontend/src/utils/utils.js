export function getLocalState(key, defaultValue) {

    try {
        const data = localStorage.getItem(key);
        if (data) {
            try {
                return JSON.parse(data)
            } catch (e) {
                console.log(e);
            }
        }
        return defaultValue;
    } catch (e) {
        console.log(e);
    }
    return defaultValue;
}

export function saveLocalState(key, value) {

    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}

export function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token }
    } else if (user && user.jwt) {
        return { Authorization: 'Bearer ' + user.jwt }
    } else {
        return {};
    }
}
