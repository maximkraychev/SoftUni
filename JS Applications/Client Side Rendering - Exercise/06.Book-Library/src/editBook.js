import { html } from '../node_modules/lit-html/lit-html.js';

const sectionHTML = html`
<form id="edit-form" @submit=${editBook}>
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>
`

export function showEdit(ctx, id) {
    return sectionHTML;
}

async function editBook(ctx, id) {
    

}