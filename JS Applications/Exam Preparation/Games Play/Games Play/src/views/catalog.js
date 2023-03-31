import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';

const catalogTemplate = (data) => html`

        <!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Games</h1>
            
            ${data.length != 0
            ? data.map(cardTemplate)
            : html`<h3 class="no-articles">No articles yet</h3>`}
            
        </section>
`;

const cardTemplate = (item) => html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${item.imageUrl}>
                    <h6>${item.category}</h6>
                    <h2>${item.title}</h2>
                    <a href="/details/${item._id}" class="details-button">Details</a>
                </div>
            </div>
`;

export async function showCatalog(ctx) {
    const data = await getAll();

    ctx.render(catalogTemplate(data));
}

