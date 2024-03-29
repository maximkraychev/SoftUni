export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}

export function formHandler(callback) {
    return (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries([...formData].map(([k, v]) => [k, v.trim()]));

        callback(data, form);
    }
}

export function formErrorHandler(message) {
    const divWithError = document.querySelector('.error');
    divWithError.textContent = message;
    divWithError.style.display = '';
}

export function anchorHandler(element, string) {
    if (string == 'show') {
        element.style.visibility = 'visible';
    } else if (string == 'hide') {
        element.style.visibility  = 'hidden';
    }
}