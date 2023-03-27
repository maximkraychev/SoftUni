import { html } from '../../node_modules/lit-html/lit-html.js';
import { styleMap } from '../../node_modules/lit-html/directives/style-map.js';
import { editTeam, getTeam } from '../api/data.js';
import { formHandler, formErrorHandler } from '../util.js';

const editTemplate = (description, logoUrl, name, onEditBinded) => html`
    <section id="edit">
        <article class="narrow">
            <header class="pad-med">
                <h1>Edit Team</h1>
            </header>
            <form @submit=${onEditBinded} id="edit-form" class="main-form pad-large">
                <div class="error" style=${styleMap({display: 'none'})}>Error message.</div>
                <label>Team name: <input .value=${name} type="text" name="name"></label>
                <label>Logo URL: <input .value=${logoUrl} type="text" name="logoUrl"></label>
                <label>Description: <textarea .value=${description} name="description"></textarea></label>
                <input class="action cta" type="submit" value="Save Changes">
            </form>
        </article>
    </section>
`;

export async function showEdit(ctx) {
    const teamId = ctx.params.id;
    const {description, logoUrl, name} = await getTeam(teamId);
    const onEditBinded = onEdit.bind(null, ctx);
    ctx.render(editTemplate(description, logoUrl, name, formHandler(onEditBinded)));
}

async function onEdit(ctx, {name, logoUrl, description}, form) {
    if(name.length < 4) {
        formErrorHandler('Team name require, at least 4 characters!');
        return;
    }

    if(logoUrl == '') {
        formErrorHandler('LogoUrl is required!');
        return;
    }

    if(description.length < 10) {
        formErrorHandler('The desciption should have at least 10 characters!');
        return;
    }

    const teamId = ctx.params.id;
    await editTeam(teamId, {name, logoUrl, description});
    form.reset();
    ctx.page.redirect('/browse/' + teamId);
}