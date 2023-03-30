import { html } from '../../node_modules/lit-html/lit-html.js';
import { edit, getSingle } from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (onEdit, data) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onEdit} class="edit-form">
            <input .value=${data.singer} type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input .value=${data.album} type="text" name="album" id="album-album" placeholder="Album" />
            <input .value=${data.imageUrl} type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input .value=${data.release} type="text" name="release" id="album-release" placeholder="Release date" />
            <input .value=${data.label} type="text" name="label" id="album-label" placeholder="Label" />
            <input .value=${data.sales} type="text" name="sales" id="album-sales" placeholder="Sales" />

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
    
    setTimeout( () => {
        form.reset();
    context.page.redirect('/details/' + itemId);
    }, 100)
    
}