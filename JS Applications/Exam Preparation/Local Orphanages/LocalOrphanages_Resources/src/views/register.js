import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';
import { formHandler } from '../util.js';

const registerTemplate = (onRegister) => html`
<section id="register-page" class="auth">
    <form @submit=${onRegister} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
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
    context.page.redirect('/catalog');
}