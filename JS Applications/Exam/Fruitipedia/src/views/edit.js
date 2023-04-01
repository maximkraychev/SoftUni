import { html } from '../../node_modules/lit-html/lit-html.js';
import { edit, getSingle } from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (onEdit, data) => html`
 <!-- Edit Page (Only for logged-in users) -->
 <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                .value=${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                .value=${data.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value=${data.description}
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value=${data.nutrition}
              ></textarea>
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
