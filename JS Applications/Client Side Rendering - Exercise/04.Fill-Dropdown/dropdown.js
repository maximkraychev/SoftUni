import { request } from './request.js';
import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';

const selectElement = document.querySelector('#menu');
const formElement = document.querySelector('form');
const textInput = formElement.querySelector('#itemText');
formElement.addEventListener('submit', addItem);

const template = (x) => html`
    <option value=${x._id}>${x.text}</option>
`;

async function loadOptions() {
    let data = await request();
    render(repeat(Object.values(data), template), selectElement);
}

// With map

// const template = (data) => html`
// ${data.map(x => html`<option value=${x._id}>${x.text}</option>`)}
// `

// async function loadOptions() {
//     let data = await request();
//     render(template(Object.values(data)), selectElement);
// }


loadOptions()

async function addItem(event) {
    event.preventDefault();
    const text = textInput.value;

    await request({ text }, 'POST');
    formElement.reset();
    loadOptions();
}





