import { towns } from './towns.js';
import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';


const divTowns = document.querySelector('#towns');
const inputSearch = document.querySelector('#searchText');
const btn = document.querySelector('button');
const divResult = document.querySelector('#result');

const template = (data) => html`
<ul>
   ${repeat(data, (x) => html`<li>${x}</li>`)}
</ul>
`;
render(template(towns), divTowns);

btn.addEventListener('click', search)
function search() {
   const searchText = inputSearch.value;
   const allListItems = Array.from(divTowns.querySelectorAll('li'));
   const matches = allListItems.filter(x => x.textContent.startsWith(searchText));

   allListItems.map(x => matches.includes(x) ? x.classList.add('active') : x.classList.remove('active'))

   divResult.textContent = `${matches.length} matches found`;
   inputSearch.value = '';
}


