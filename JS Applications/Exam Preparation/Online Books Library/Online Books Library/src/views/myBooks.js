import { html } from '../../node_modules/lit-html/lit-html.js';

const myBooksTemplate = () => html`
<!-- My Books Page ( Only for logged-in users ) -->
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        <li class="otherBooks">
            <h3>Outlander</h3>
            <p>Type: Other</p>
            <p class="img"><img src="/images/book2.png"></p>
            <a class="button" href="#">Details</a>
        </li>
        <li class="otherBooks">
            <h3>A Court of Thorns and Roses</h3>
            <p>Type: Fiction</p>
            <p class="img"><img src="/images/book1.png"></p>
            <a class="button" href="#">Details</a>
        </li>
    </ul>

    <!-- Display paragraph: If the user doesn't have his own books  -->
    <p class="no-books">No books in database!</p>
</section>
`;

export function showMyBooks(ctx) {
    ctx.render(myBooksTemplate());
}