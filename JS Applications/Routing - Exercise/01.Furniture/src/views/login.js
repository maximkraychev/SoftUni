import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/user.js';

const loginTemplate = (ctx) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit.bind(null, ctx)}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
</div>
`

export function showLogin(ctx) {
    ctx.render(loginTemplate(ctx));
}

async function onSubmit(ctx, event) {
    event.preventDefault();

    const formData = ctx.formHandler(event.currentTarget);
    const email = formData.email.trim();
    const password = formData.password.trim();

    await login(ctx, { email, password });
    event.target.reset();
    ctx.updateNavigation();
    ctx.page.redirect('/catalog');
}