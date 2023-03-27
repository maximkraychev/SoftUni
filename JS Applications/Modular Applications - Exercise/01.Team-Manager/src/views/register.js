import { html } from '../../node_modules/lit-html/lit-html.js';
import { styleMap } from '../../node_modules/lit-html/directives/style-map.js';
import { formErrorHandler, formHandler } from '../util.js';
import { register } from '../api/user.js';

const registerTemplate = (bindedOnRegister) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${bindedOnRegister} id="register-form" class="main-form pad-large">
            <div class="error" style=${styleMap({display: 'none'})}>Error message.</div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>
`;

export function showRegister(ctx) {
    const bindedOnRegister = onRegister.bind(null, ctx);
    ctx.render(registerTemplate(formHandler(bindedOnRegister)));
}

async function onRegister(ctx, {email, username, password, repass}, form) {

    if (/^\w+@\w+\.\w+$/g.test(email) == false) {
        formErrorHandler('Invalid email!')
        return;
    }

    if (username.length < 3) {
        formErrorHandler('Sorry your username should be at least 3 characters long!')
        return;
    }

    if (password.length < 3) {
        formErrorHandler('Sorry your password should be at least 3 characters/digits long!')
        return;
    }

    if (repass != password) {
        formErrorHandler('Your passwords doesn\'t match!')
        return;
    }



    await register({email, username, password});
    form.reset();
    ctx.page.redirect('/myTeams');
}