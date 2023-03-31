import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';
import { formHandler } from '../util.js';

const registerTemplate = (onRegister) => html`
 <section id="register-page" class="content auth">
            <form @submit=${onRegister} id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
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


    if (data.password != data['confirm-password']) {
        alert('Passwords must match!');
        return;
    }


    await register({ email: data.email, password: data.password });

    form.reset();
    context.page.redirect('/home');
}