import { html } from '../../node_modules/lit-html/lit-html.js';
import { edit, getSingle } from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (onEdit, data) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit-page" class="auth">
    <form @submit=${onEdit} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" .value=${data.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value=${data.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value=${data.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value=${data.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value=${data.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
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