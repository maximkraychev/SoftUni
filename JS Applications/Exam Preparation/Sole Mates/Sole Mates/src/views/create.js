import { html } from '../../node_modules/lit-html/lit-html.js';
import { addShoe } from '../api/data.js';
import { formHandler } from '../util.js';

const createTemplate = (onSubmit) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
        <h2>Add item</h2>
        <form @submit=${onSubmit} class="create-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

let context = null;

export function showCreate(ctx) {
    context = ctx;
    ctx.render(createTemplate(formHandler(onSubmit)));
}

async function onSubmit(data, form) {

    if (Object.values(data).some(x => x == '')) {
        alert('All fields must be fill!');
        return;
    }

    await addShoe(data);

    form.reset();
    context.page.redirect('/dashboard');
}