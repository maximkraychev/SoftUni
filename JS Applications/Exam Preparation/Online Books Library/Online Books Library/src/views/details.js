import { html } from '../../node_modules/lit-html/lit-html.js';

const detailsTemplate = () => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>A Court of Thorns and Roses</h3>
        <p class="type">Type: Fiction</p>
        <p class="img"><img src="/images/book1.png"></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <a class="button" href="#">Edit</a>
            <a class="button" href="#">Delete</a>

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a class="button" href="#">Like</a>

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold,
            bleak place in the long winter months. So when she spots a deer in the forest being pursued by a
            wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and
            killing something so precious comes at a price ...</p>
    </div>
</section>
`;

export function showDetails(ctx) {
    ctx.render(detailsTemplate());
}