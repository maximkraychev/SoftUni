import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';
import { formHandler, notificationHandler, setUserData } from '../util.js';

const loginTemplate = (onClickWithCtx) => html`
<section id="login">
    <form @submit=${onClickWithCtx} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="#">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function showLogin(ctx) {
    const onClickWithCtx = onClick.bind(null, ctx);
    ctx.render(loginTemplate(formHandler(onClickWithCtx)));
}

async function onClick(ctx, data, form) {
   
    if (Object.values(data).some(x => x == '')) {
        notificationHandler('All fields are required!', 3000);
        return;
    }

    try {
        const userData = await login(data);
        setUserData(userData);
        form.reset();
        ctx.page.redirect('/allMemes');
    } catch(err) {
        notificationHandler(err.message, 3000);
    }
}