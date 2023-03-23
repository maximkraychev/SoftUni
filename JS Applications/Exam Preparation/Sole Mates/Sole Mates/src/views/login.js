import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';
import { formHandler, setUserData } from '../util.js';

const loginTemplate = (onSubmit) => html`
<!-- Login Page (Only for Guest users) -->
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`;

let context = null;

export function showLogin(ctx) {
    context = ctx;
    ctx.render(loginTemplate(formHandler(onSubmit)));
}

async function onSubmit(data, form) {
    if (Object.values(data).some(x => x == '')) {
        alert('All fields are required!');
        return;
    }

    const response = await login(data);
    
    setUserData(response);
    form.reset();
    context.page.redirect('/dashboard');
} 