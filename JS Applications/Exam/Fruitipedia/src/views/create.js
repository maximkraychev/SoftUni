import { html } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../api/data.js';
import { formHandler } from '../util.js';

const createTemplate = (onCreate) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
          <div class="form">
            <h2>Add Fruit</h2>
            <form @submit=${onCreate} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
              />
              <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="fruit-nutrition"
              name="nutrition"
              placeholder="Nutrition"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fruit</button>
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

