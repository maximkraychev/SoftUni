import { html } from '../node_modules/lit-html/lit-html.js';

export function setSessionStorageData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getSessionStorageData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function clearSessionStorageData() {
    sessionStorage.removeItem('userData');
}

export function formHandler(element) {
    const form = Object.fromEntries(new FormData(element));
    return form;
}


export function updateNavigation() {
    const nav = document.querySelector('nav');
    const user = nav.querySelector('#user');
    const guest = nav.querySelector('#guest');
    const userData = getSessionStorageData();

    if (userData) {
        guest.style.display = 'none';
        user.style.display = '';
    } else {
        guest.style.display = '';
        user.style.display = 'none';
    }
}

export function validate(key, value) {

    const libary = {
        make: () => value.length >= 4,
        model: () => value.length >= 4,
        year: () => (Number(value) >= 1950 && Number(value) <= 2050),
        description: () => value.length >= 10,
        price: () => (value != '' && Number(value) >= 0),
        img: () => value != '',
    }

    return libary[key]();
}


export function formHandlerPlusClassAdding(ctx, event) {
    event.preventDefault();
    const formData = ctx.formHandler(event.currentTarget);
    let isOneInputInvalid = false;

    for (const key in formData) {
        if (key == 'material') {
            continue;
        }

        const input = event.currentTarget.querySelector(`input[name=${key}]`);
        const isInputValid = validate(key, formData[key]);

        if (isInputValid) {
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');

        } else {
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            isOneInputInvalid = true;
        }
    }

    if (isOneInputInvalid) {
        alert('Invalid input');
        return 'Invalid input';
    }

    return formData;
}


export const furnitureTemplate = (furniture) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${furniture.img} />
            <p>${furniture.description}</p>
            <footer>
                <p>Price: <span>${furniture.price} $</span></p>
            </footer>
            <div>
                <a href="/catalog/${furniture._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>
`