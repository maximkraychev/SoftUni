import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchShoe } from '../api/data.js';
import { formHandler } from '../util.js';

const searchTemplate = (onSearch, isUser, searchResult) => html`
<!-- Search Page (Only for logged-in users) -->
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${Array.isArray(searchResult) && searchResult.length != 0 ? html`
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${searchResult.map(x => shoeTemplate(x, isUser))}
        </ul>
        `: null}

        ${Array.isArray(searchResult) && searchResult.length == 0 ? html`
        <!-- Display an h2 if there are no posts -->
        <h2>There are no results found.</h2>
        `: null}

    </div>
</section>
`;

const shoeTemplate = (shoe, isUser) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${isUser 
        ? html`
        <a class="details-btn" href="/details/${shoe._id}">Details</a>` 
        : null}
    
</li>
`;

let context = null;
let isUser = false;

export function showSearch(ctx) {
    context = ctx;
    isUser = ctx.user != null;
    update(isUser);
}

function update(isUser ,searchResult) {
    context.render(searchTemplate(formHandler(onSearch), isUser, searchResult));
}

async function onSearch(data) {
    const query = data.search;
    if (query == '') {
        return;
    }
    const searchData = await searchShoe(query);
    update(isUser, searchData);
}