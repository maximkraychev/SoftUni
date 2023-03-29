import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';
import { formHandler } from '../util.js';

const registerTemplate = (onRegister) => html`
<section id="registerPage">
    <form @submit=${onRegister} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>
`;

let context = null;

export function showRegister(ctx) {
    context = ctx;
    ctx.render(registerTemplate(formHandler(onRegister)));
}


async function onRegister(data, form) {

    if (Object.values(data).some(x => x == '')) {
        alert('All fields are required!');
        return
    }

    if (data.password != data.repeatPassword) {
        alert('Passwords must match!');
        return;
    }

    await register({ email: data.email, password: data.password });

    form.reset();
    context.page.redirect('/welcome');
}