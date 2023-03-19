import { html } from '../../node_modules/lit-html/lit-html.js';
import { createOffer } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (onClick) => html`
    <section id="create">
        <div class="form">
            <h2>Create Offer</h2>
            <form class="create-form" @submit=${onClick}>
                <input type="text" name="title" id="job-title" placeholder="Title" />
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
                <input type="text" name="category" id="job-category" placeholder="Category" />
                <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                    cols="50"></textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`
let context = null;

export function showCreate(ctx) {
    context = ctx;
    ctx.render(createTemplate(createSubmitHandler(onClick)));
}

async function onClick(data, form) {

    if (Object.values(data).some(x => x == '')) {
        return alert('All fields must be filled in');
    }
 
    await createOffer(data);
    form.reset();
    context.page.redirect('/dashboard');
}