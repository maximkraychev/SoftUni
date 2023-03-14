import { html, render } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js'
import { getBooks } from './api/data.js';


const catalogHTML = (ctx, books) => html`
    <body>
        <button id="loadBooks" @click=${loadAllBooks.bind(null, ctx)}>LOAD ALL BOOKS</button>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${books ? console.log(until(books)) : console.log(books)}
            </tbody>
        </table>
    </body>
        `

export function showCatalog(ctx) {
    return catalogHTML(ctx);
}

export async function loadAllBooks(ctx) {
    let data = await getBooks();
    data = Object.entries(data).map(([k, v]) => Object.assign(v, { _id: k }));
    const booksHTML = data.map(bookRow);
    catalogHTML(null, booksHTML)
}

function bookRow(book) {
    return html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>
    `
}




