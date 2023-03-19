import { html } from '../../node_modules/lit-html/lit-html.js';
import { reister } from '../api/user.js';
import { createSubmitHandler } from '../util.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

let context = null;

export function showRegister(ctx) {
    context = ctx;
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));
}


async function onSubmit(data, form) {
    if (data.email == '' || data.password == '') {
        return alert('All fields must be filled in');
    }

    if (data.password != data['re-password']) {
        return alert('Re-password should match the password')
    }
    
    delete data['re-password'];
    
    await reister(data);
    form.reset();
    context.page.redirect('/dashboard');
}