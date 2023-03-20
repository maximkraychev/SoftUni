import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';
import { formHandler, setUserData } from '../util.js';

const registerTemplate = (onSubmit) => html`
<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`;

let context = null;

export function showRegister(ctx) {
    context = ctx;
    ctx.render(registerTemplate(formHandler(onSubmit)));
}

async function onSubmit(data, form) {

    if (Object.values(data).some(x => x == '')) {
        alert('All fields must be filed!');
        return;
    }

    if (data.password != data['confirm-pass']) {
        alert('Passwords must match!');
        return;
    }

    const userData = await register({ email: data.email, password: data.password });

    setUserData(userData);
    form.reset();
    context.page.redirect('/dashboard');
}