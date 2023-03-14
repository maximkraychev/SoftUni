import { html, render } from './node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/table';
const tableBodyelement = document.querySelector('.container tbody');
const searchInput = document.querySelector('#searchField');

const data = await requestForData();
render(template(Object.values(data)), tableBodyelement);


function requestForData() {
   return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => alert(err.message))
}

function template(data) {
   return data.map(x => html`
   <tr>
      <td>${x.firstName} ${x.lastName}</td>
      <td>${x.email}</td>
      <td>${x.course}</td>
   </tr>
   `
   )
}

document.querySelector('#searchBtn').addEventListener('click', onClick);
function onClick() {
   const searchText = searchInput.value.toLowerCase();
   const allTableRows = Array.from(tableBodyelement.querySelectorAll('tr'));
   allTableRows.forEach(x => findMathces(x, searchText)
      ? x.classList.add('select')
      : x.classList.remove('select'));
}

function findMathces(element, text) {
   const tds = Array.from(element.children);
   if (tds.some(x => x.textContent.toLowerCase().includes(text))) {
      return true;
   } else {
      return false;
   }
}
