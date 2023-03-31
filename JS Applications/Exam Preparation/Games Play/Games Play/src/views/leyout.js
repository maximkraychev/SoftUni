import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { clearUserData } from '../util.js';

export const navigationTemplate = (ctx, content) => html`
        <header>
            <!-- Navigation -->
            <h1><a class="home" href="/home">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                ${ctx.user != null 
                ? html` 
                    <!-- Logged-in users -->
                    <div id="user">
                        <a href="/create">Create Game</a>
                        <a @click=${onLogout.bind(null, ctx)} href="#">Logout</a>
                    </div>`
                : html`
                    <!-- Guest users -->
                    <div id="guest">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>`}
            </nav>
        </header>

        <!-- Main Content -->
        <main id="main-content">${content}</main>
`;


async function onLogout(ctx) {
    logout();
    clearUserData();
    ctx.page.redirect('/home');
}



