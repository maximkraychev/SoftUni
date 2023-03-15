import { deleteBook } from './api/data.js'

export async function onDelete(id) {
    deleteBook(id);
}