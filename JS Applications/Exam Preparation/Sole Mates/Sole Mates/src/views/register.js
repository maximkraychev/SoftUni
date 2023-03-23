import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';
import { formHandler, setUserData } from '../util.js';

const registerTemplate = (onSubmit) => html`
<!-- Register Page (Only for Guest users) -->
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

let context = null;

export function showRegister(ctx) {
    context = ctx;
    ctx.render(registerTemplate(formHandler(onSubmit)));
}

async function onSubmit(data, form) {
    if (Object.values(data).some(x => x == '')) {
        alert('All fields are required!');
        return;
    }

    if (data.password != data['re-password']) {
        alert('Passwords don\'t match!');
        return;
    }

    const response = await register({ email: data.email, password: data.password });

    setUserData(response);
    form.reset();
    context.page.redirect('/dashboard');
} 