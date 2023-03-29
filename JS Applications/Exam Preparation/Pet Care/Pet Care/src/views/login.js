import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';
import { formHandler } from '../util.js';

const loginTemplate = (onLogin) => html`
<section id="loginPage">
    <form @submit=${onLogin} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>
`;

let context = null;

export function showLogin(ctx) {
    context = ctx;
    ctx.render(loginTemplate(formHandler(onLogin)));
}

async function onLogin(data, form) {

    if (Object.values(data).some(x => x == '')) {
        alert('All fields are required!');
        return;
    }

    await login(data);
    form.reset();
    context.page.redirect('/welcome');
}