import { html } from '../../node_modules/lit-html/lit-html.js';
import { getBooks } from '../api/data.js';

const dashboardTemplate = (books) => html`
<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
        ${books.length != 0 
            ? books.map(x => bookTemplate(x))
            : html`<p class="no-books">No books in database!</p>`}
    </ul>
</section>
`;

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href=${`/details/${book._id}`}>Details </a> </li>
`;

export async function showDashboard(ctx) {
    const books = await getBooks();

    ctx.render(dashboardTemplate(books));
}