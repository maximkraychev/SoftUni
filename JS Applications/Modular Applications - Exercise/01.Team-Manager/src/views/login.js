import { html } from '../../node_modules/lit-html/lit-html.js';
import { styleMap } from '../../node_modules/lit-html/directives/style-map.js';
import { formErrorHandler, formHandler } from '../util.js';
import { login } from '../api/user.js';

const loginTemplate = (bindedOnLogin) => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form @submit=${bindedOnLogin} id="login-form" class="main-form pad-large">
                <div class="error" style=${styleMap({display: 'none'})}>Error message.</div>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>
`;

export function showLogin(ctx) {
    const bindedOnLogin = onLogin.bind(null, ctx);
    ctx.render(loginTemplate(formHandler(bindedOnLogin)));
}

async function onLogin(ctx, data, form) {
    
    if (Object.values(data).some(x => x == '')) {
        formErrorHandler('All fields must be filled!');
        return;
    }

    await login(data);
    form.reset();
    ctx.page.redirect('/myTeams');
}