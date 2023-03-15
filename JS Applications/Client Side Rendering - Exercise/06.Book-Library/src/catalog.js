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
                ${books ? html`${books}` : null}
            </tbody>
        </table>
    </body>
        `

export function showCatalog(ctx, books) {
    const page = catalogHTML(ctx, books);
    ctx.pageState.catalog = page;
    return page;
}

export async function loadAllBooks(ctx) {
    let data = await getBooks();
    data = Object.entries(data).map(([k, v]) => Object.assign(v, { _id: k }));
    const books = data.map(x => bookRow(ctx, x));
    ctx.pageState.catalog = ctx.showCatalog(ctx, books);
    ctx.update()
    
}

function bookRow(ctx, book) {
    return html`
    <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click=${onlickEdit.bind(null, ctx, book)}>Edit</button>
            <button @click=${ctx.onDelete.bind(null, book._id)}>Delete</button>
        </td>
    </tr>
    `
}

function onlickEdit(ctx, book) {
    ctx.form = 'edit';
    ctx.showCreate(ctx);
    ctx.showEdit(ctx, book);
    ctx.update();
}




