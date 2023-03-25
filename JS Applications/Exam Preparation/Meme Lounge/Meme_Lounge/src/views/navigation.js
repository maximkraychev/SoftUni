import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { clearUserData } from '../util.js';

export const navigationTemplate = (ctx, content) => html`
    <!-- Notifications -->
    <section id="notifications">
        <div id="errorBox" class="notification">
            <span>MESSAGE</span>
        </div>
    </section>
    
    <!-- Navigation -->
    <nav>
        <a href="/allMemes">All Memes</a>
        ${ctx.user != null 
        ? html`
            <!-- Logged users -->
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${ctx.user.email}</span>
                    <a href="/profile">My Profile</a>
                    <a href="javascript:void(0)" @click=${onLogout.bind(null, ctx)}>Logout</a>
                </div>
            </div>`
        : html`
            <!-- Guest users -->
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/welcome">Home Page</a>
            </div>`}
    </nav>
    
    <!-- Main Content -->
    <main>
        ${content}
    </main>
    
    <!-- Footer  -->
    <footer class="footer">
        <p>Created by SoftUni Delivery Team</p>
    </footer>
`;


async function onLogout(ctx) {
    await logout();
    clearUserData();
    ctx.page.redirect('/welcome');
}