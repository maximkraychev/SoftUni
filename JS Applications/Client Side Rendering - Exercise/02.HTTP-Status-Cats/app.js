import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';
import { cats } from './catSeeder.js';

const secionAllCats = document.querySelector('#allCats');

const finalHtml = (data) => html`
<ul @click=${showMore}>
    ${repeat(data, template)}
</ul>
`;

render(finalHtml(cats), secionAllCats);

function template(data) {
    return html`
    <li>
        <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${data.id}">
                <h4>Status Code: ${data.statusCode}</h4>
                <p>${data.statusMessage}</p>
            </div>
        </div>
    </li>
    `
}

function showMore(event) {
    if (event.target.tagName != 'BUTTON') {
        return;
    }
    const parentDiv = event.target.parentElement
    const divToShow = parentDiv.querySelector('.status');
    if (divToShow.style.display == 'none') {
        event.target.textContent = 'Hide status code'
        divToShow.style.display = 'block';
    } else {
        event.target.textContent = 'Show status code'
        divToShow.style.display = 'none'
    }
}