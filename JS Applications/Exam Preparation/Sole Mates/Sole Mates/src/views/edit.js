import { html } from '../../node_modules/lit-html/lit-html.js';
import { editShoe, getShoe } from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (onSubmit, shoe) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input .value=${shoe.brand} type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input .value=${shoe.model} type="text" name="model" id="shoe-model" placeholder="Model" />
            <input .value=${shoe.imageUrl} type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input .value=${shoe.release} type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input .value=${shoe.designer} type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input .value=${shoe.value} type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

let context = null;

export async function showEdit(ctx) {
    context = ctx;
    const shoeId = ctx.params.id;
    const shoe = await getShoe(shoeId);

    ctx.render(editTemplate(formHandler(onSubmit), shoe));
}

async function onSubmit(data, form) {

    if (Object.values(data).some(x => x == '')) {
        alert('All fields must be fill!');
        return;
    }

    const shoeId = context.params.id;
    await editShoe(shoeId, data);
    form.reset();
    context.page.redirect('/details/' + shoeId);
}