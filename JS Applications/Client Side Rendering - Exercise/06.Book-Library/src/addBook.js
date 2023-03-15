import { html } from '../node_modules/lit-html/lit-html.js';
import { createBook } from './api/data.js'

const sectionHTML = (ctx) => html`
${ctx.form !== 'add'
        ? null
        : html`
<form id="add-form" @submit=${addBook}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`
    }
    `

export function showCreate(ctx) {
    const page = sectionHTML(ctx);
    ctx.pageState.add = page
    return page;
}

async function addBook(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const title = form.get('title');
    const author = form.get('author');

    await createBook({ title, author });
    event.target.reset();
}