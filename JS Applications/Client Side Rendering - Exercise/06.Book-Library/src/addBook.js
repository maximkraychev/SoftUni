import {html} from '../node_modules/lit-html/lit-html.js';
const sectionHTML = html`
    <form id="add-form" @submit=${addBook}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
    `

let context = null;

export function showCreate(ctx) {
    context = ctx;
    return sectionHTML;
}

async function addBook(event) {
    event.preventDefault();
}