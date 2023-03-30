import { html } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../api/data.js';
import { formHandler } from '../util.js';

const createTemplate = (onCreate) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Add Product</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="name" id="name" placeholder="Product Name" />
            <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
            <input type="text" name="category" id="product-category" placeholder="Category" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
                cols="50"></textarea>

            <input type="text" name="price" id="product-price" placeholder="Price" />

            <button type="submit">Add</button>
        </form>
    </div>
</section>
`;

let context = null;

export function showCreate(ctx) {
    context = ctx;
    ctx.render(createTemplate(formHandler(onCreate)));
}

async function onCreate(data, form) {
    if (Object.values(data).some(x => x == '')) {
        alert('All fields are required!');
        return;
    }

    await create(data);
    form.reset();
    context.page.redirect('/catalog');
}