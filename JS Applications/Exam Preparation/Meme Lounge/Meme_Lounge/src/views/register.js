import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/user.js';
import { formHandler, notificationHandler, setUserData } from '../util.js';

const registerTemplate = (onClickWithCtx) => html`
<section id="register">
    <form @submit=${onClickWithCtx} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="#">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export function showRegister(ctx) {
    const onClickWithCtx = onClick.bind(null, ctx);
    ctx.render(registerTemplate(formHandler(onClickWithCtx)));
}

async function onClick(ctx, data, form) {

    if (Object.values(data).some(x => x == '')) {
        notificationHandler('All fields are required!', 3000);
        return;
    }

    if (data.password != data.repeatPass) {
        notificationHandler('Passwords must match!', 3000);
        return;
    }

    delete data.repeatPass;

    try {
        const userData = await register(data);
        setUserData(userData);
        form.reset();
        ctx.page.redirect('/allMemes');
    } catch (err) {
        notificationHandler(err.message, 3000);
    }
}