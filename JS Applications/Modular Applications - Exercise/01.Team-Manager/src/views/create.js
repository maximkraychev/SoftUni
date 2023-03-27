import { html } from '../../node_modules/lit-html/lit-html.js';
import { styleMap } from '../../node_modules/lit-html/directives/style-map.js'
import { formErrorHandler, formHandler } from '../util.js';
import { createTeam } from '../api/data.js';

const createTemplate = (bindedOnCreate) => html`
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form @submit=${bindedOnCreate} id="create-form" class="main-form pad-large">
            <div class="error" style=${styleMap({display: 'none'})}>Error message.</div>
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>
`;

export function showCreate(ctx) {
    const bindedOnCreate = onCreate.bind(null, ctx);
    ctx.render(createTemplate(formHandler(bindedOnCreate)));
}

async function onCreate(ctx, {name, logoUrl, description}, form) {
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
   
    const team = await createTeam({name, logoUrl, description});
    form.reset();
    ctx.page.redirect('/browse/' + team._id);
}