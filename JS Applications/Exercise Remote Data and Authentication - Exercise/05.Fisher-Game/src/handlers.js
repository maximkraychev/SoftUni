const login = document.querySelector('#login');
const register = document.querySelector('#register');
const logout = document.querySelector('#logout');
const span = document.querySelector('.email span');


export function headerHandler() {
    if (sessionStorage.getItem('accessToken') == null) {
        login.style.display = 'inline';
        register.style.display = 'inline';
        logout.style.display = 'none';
        span.textContent = 'guest';
        return;
    }

    login.style.display = 'none';
    register.style.display = 'none';
    logout.style.display = 'inline';
    span.textContent = sessionStorage.getItem('email');
}

export function addButtonHandler() {
    if(sessionStorage.getItem('accessToken')) {
        const addBtn = document.querySelector('.add');
        addBtn.disabled = false;
    }
}

export function credentialsHandler(credentials) {
    sessionStorage.setItem('accessToken', credentials.accessToken);
    sessionStorage.setItem('email', credentials.email);
    sessionStorage.setItem('id', credentials._id);
}