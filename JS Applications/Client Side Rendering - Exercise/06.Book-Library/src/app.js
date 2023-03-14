import { html, render } from '../node_modules/lit-html/lit-html.js';
import { showCreate } from './addBook.js';
import { showEdit } from './editBook.js';
import { loadAllBooks, showCatalog } from "./catalog.js";
import { onDelete } from './delete.js'

const body = document.body;

const ctx = {
    showCreate,
    showEdit,
    showCatalog,
    onDelete,
    body,
    update,
    
}

//loadAllBooks()
update();
function update() {
    render([showCatalog(ctx), showCreate(ctx), showEdit(ctx)], body)
}