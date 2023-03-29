import { html } from '../../node_modules/lit-html/lit-html.js';
import { edit, getDetails } from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (data, onEdit) => html`
<section id="editPage">
    <form @submit=${onEdit} class="editForm">
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value=${data.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value=${data.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value=${data.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value=${data.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value=${data.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`;

let context = null;

export async function showEdit(ctx) {
    context = ctx;
    const postcardId = ctx.params.id;
    const data = await getDetails(postcardId);

    ctx.render(editTemplate(data, formHandler(onEdit)));
}

async function onEdit(data, form) {

    if (Object.values(data).some(x => x == '')) {
        alert('All fields are required!');
        return;
    }

    const postcardId = context.params.id;

    await edit(postcardId, data);
    form.reset();
    context.page.redirect('/details/' + postcardId);
}