import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { clearUserData } from '../util.js';

export const navigationTemplate = (ctx, content) => html`
<!--Navigation-->
<header>
    <nav>
        <section class="logo">
            <img src="./images/logo.png" alt="logo">
        </section>
        <ul>
            <!--Users and Guest-->
            <li><a href="/welcome">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>

            ${ctx.user == null 
            ? html`
                <!--Only Guest-->
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>` 
            : html`
                <!--Only Users-->
                <li><a href="/create">Create Postcard</a></li>
                <li><a @click=${onLogout.bind(null, ctx)} href="javascript:void(0)">Logout</a></li>`}

        </ul>
    </nav>
</header>

<main id="content">${content}</main>

<footer>Pet Care 2022©</footer>
`;


async function onLogout(ctx) {
    logout();
    clearUserData();
    ctx.page.redirect('/welcome');
}

