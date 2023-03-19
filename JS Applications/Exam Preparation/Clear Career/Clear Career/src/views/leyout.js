import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';

export const leyoutTemplate = (ctx, content) => html`
<header>
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

    <nav>
        <div>
            <a href="/dashboard">Dashboard</a>
        </div>
    ${ctx.user 
    ? html`
    <!-- Logged-in users -->
    <div class="user">
            <a href="/create">Create Offer</a>
            <a href="javascript:void(0)" @click=${onLogout.bind(null, ctx)}>Logout</a>
        </div>
    `
    : html`
       <!-- Guest users -->
       <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    `}
    </nav>
</header>
<main>
    ${content}
</main>
`;

async function onLogout(ctx) {
    logout();
    ctx.page.redirect('/dashboard');
}