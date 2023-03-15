import { render } from '../node_modules/lit-html/lit-html.js';
import { showCreate } from './addBook.js';
import { editBook, showEdit } from './editBook.js';
import { showCatalog } from "./catalog.js";
import { onDelete } from './delete.js'

const body = document.body;

const ctx = {
    showCreate,
    showEdit,
    showCatalog,
    onDelete,
    body,
    update,
    form: 'add',
    editBook,
    pageState: {}
}

function update() {
    render(Object.values(ctx.pageState), body)
}


init();
function init() {
    render([showCatalog(ctx), showCreate(ctx), showEdit(ctx)], body)
}

