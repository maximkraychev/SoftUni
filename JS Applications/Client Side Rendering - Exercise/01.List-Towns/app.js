import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js'

const formElement = document.querySelector('form');
const root = document.querySelector('#root');

const htmlScletet = (data) => html`
<ul>
    ${repeat(data, (x) => html`<li>${x}</li>`)}
</ul>
`

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(formElement);
    const towns = form.get('towns').split(', ').filter(x => x.trim() != '');
    render(htmlScletet(towns), root);
});


