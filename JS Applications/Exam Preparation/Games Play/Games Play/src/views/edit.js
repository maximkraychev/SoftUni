import { html } from '../../node_modules/lit-html/lit-html.js';
import { edit, getSingle } from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (onEdit, data) => html`
        <!-- Edit Page ( Only for the creator )-->
        <section id="edit-page" class="auth">
            <form @submit=${onEdit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${data.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${data.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${data.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${data.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${data.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
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

