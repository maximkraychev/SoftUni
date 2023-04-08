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

export function notificationHandler(text, timeOut) {
    const sectionNotification = document.querySelector('.notification');
    const span = sectionNotification.querySelector('span');

    span.textContent = text;
    sectionNotification.style.display = 'inline';

    setTimeout(() => {
        sectionNotification.style.display = 'none';
    }, timeOut)
}