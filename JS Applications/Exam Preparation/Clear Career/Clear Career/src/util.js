export function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}


export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries([...formData.entries()].map(([k,v]) => [k, v.trim()]));

        callback(data, form);
    }
}