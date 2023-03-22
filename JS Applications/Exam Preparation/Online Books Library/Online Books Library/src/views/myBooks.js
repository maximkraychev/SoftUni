import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../api/data.js';
import { getUserData } from '../util.js';

const myBooksTemplate = (myBooks) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${myBooks.length != 0 ? html`
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        ${myBooks.map(x => bookTemplate(x))}
    </ul>
    `: html`
    <!-- Display paragraph: If the user doesn't have his own books  -->
    <p class="no-books">No books in database!</p>
    `}
</section>
`;

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`;

export async function showMyBooks(ctx) {
    const userId = getUserData()._id;
    const myBooks = await getMyBooks(userId);

    ctx.render(myBooksTemplate(myBooks));
}