import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';
import { formHandler } from '../util.js';

const loginTemplate = (onLogin) => html`
  <section id="login-page" class="auth">
            <form @submit=${onLogin} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
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
    context.page.redirect('/home');
}