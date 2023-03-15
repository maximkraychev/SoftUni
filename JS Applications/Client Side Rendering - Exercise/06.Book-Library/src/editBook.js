import { html } from '../node_modules/lit-html/lit-html.js';
import { updateBook } from './api/data.js';

const sectionHTML = (ctx, book) => html`
${book == undefined
? null
: html`<form id="edit-form" @submit=${editBook.bind(null, ctx, book)}>
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" .value=${book.title} placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" .value=${book.author} placeholder="Author...">
    <input type="submit" value="Save">
</form>`}
`

export function showEdit(ctx, book) {
    const page = sectionHTML(ctx, book);
    ctx.pageState.edit = page;
    return page;
}

export async function editBook(ctx, book, event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const title = form.get('title');
    const author = form.get('author');

    const test = await updateBook({ title, author }, book._id);
    event.target.reset();
    ctx.form = 'add';
    ctx.showCreate(ctx);
    ctx.showEdit(ctx);
    ctx.update();
}