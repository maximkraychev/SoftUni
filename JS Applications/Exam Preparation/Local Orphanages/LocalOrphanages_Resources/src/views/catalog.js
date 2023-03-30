import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';

const catalogTemplate = (data) => html`
<!-- Dashboard -->
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    ${data.length != 0 
    ? html`
        <!-- Display a div with information about every post (if any)-->
        <div class="all-posts">
            ${data.map(cardTemplate)}
        </div>`
    : html` <!-- Display an h1 if there are no posts -->
        <h1 class="title no-posts-title">No posts yet!</h1>`}
</section>
`;

const cardTemplate = (item) => html`
<div class="post">
    <h2 class="post-title">${item.title}</h2>
    <img class="post-image" src=${item.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${item._id}" class="details-btn btn">Details</a>
    </div>
</div>
`;

export async function showCatalog(ctx) {

    const data = await getAll();

    ctx.render(catalogTemplate(data));
}

