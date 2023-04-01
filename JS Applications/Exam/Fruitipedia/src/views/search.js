import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';


const searchTemplate = (onSearch, ctx, data = []) => html`
 <!-- Search page -->
<section id="search">

<div class="form">
  <h2>Search</h2>
    <form @submit=${onSearch} class="search-form">
        <input
        type="text"
        name="search"
        id="search-input"
        />
        <button class="button-list">Search</button>
    </form>
</div>
    <h4>Results:</h4>
    <div class="search-result">
        ${ctx.isNotSearchYet
        ? null
        :  data.length == 0
            ? html`<p class="no-result">No result.</p>`
            : data.map(templateforFruit)}
       
    </div>
  </div>
</section>
`;


const templateforFruit = (fruit) => html`
<div class="fruit">
  <img src=${fruit.imageUrl} alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>
  <a class="details-btn" href="/details/${fruit._id}">More Info</a>
</div>
`;

let context = null;

export async function showSearch(ctx) {
    context = ctx;
    ctx.isNotSearchYet = true;
    update(onSearch, ctx)

    function update(onSearch, ctx, data) {
        ctx.render(searchTemplate(onSearch, ctx, data));
    }

    async function onSearch(event) {
        event.preventDefault()
        const formData = Object.fromEntries(new FormData(event.currentTarget));
        const searchWord = formData.search.trim();
        
        if (searchWord == '') {
            alert('Search field is required!');
            return;
        }
        
        const data = await search(searchWord);
        context.isNotSearchYet = false;
        update(onSearch, context , data);
    }
}



