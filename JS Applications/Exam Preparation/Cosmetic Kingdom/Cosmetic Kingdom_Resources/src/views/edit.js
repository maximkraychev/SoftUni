import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSingle, edit} from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (onEdit, data) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form @submit=${onEdit} class="edit-form">
            <input .value=${data.name} type="text" name="name" id="name" placeholder="Product Name" />
            <input .value=${data.imageUrl} type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
            <input .value=${data.category} type="text" name="category" id="product-category" placeholder="Category" />
            <textarea .value=${data.description} id="product-description" name="description" placeholder="Description" rows="5"
                cols="50"></textarea>

            <input .value=${data.price} type="text" name="price" id="product-price" placeholder="Price" />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

let context = null;

export async function showEdit(ctx) {
    context = ctx;
    const itemId = ctx.params.id;
    const data = await getSingle(itemId);

    ctx.render(editTemplate(formHandler(onEdit), data));
}

async function onEdit(data, form) {

    if (Object.values(data).some(x => x == '')) {
        alert('All fields are required!');
        return;
    }

    const itemId = context.params.id;

    await edit(itemId, data);
    form.reset();
    context.page.redirect('/details/' + itemId);
}