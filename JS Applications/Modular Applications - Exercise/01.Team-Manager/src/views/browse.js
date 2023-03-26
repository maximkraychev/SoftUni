import { html } from '../../node_modules/lit-html/lit-html.js';
import { styleMap } from '../../node_modules/lit-html/directives/style-map.js'
import { getMembers, getPagesToShow, getTeams } from '../api/data.js';

const browseTemplate = (ctx, teams, members, pages, page) => html`
<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>

    ${ctx.user 
        ? html` 
            <article class="layout narrow">
                <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
            </article>` 
        : null}
   
    ${teams.map(x => teamTemplate(x, members))}
    <div style=${styleMap({'text-align': 'center'})}>
    ${page > 1 ? html`<a href="?page=${page - 1}">&#8678;Previous</a>` : null}
    ${page <= pages - 1 ? html`<a href="?page=${page + 1}">Next&#8680;</a>` : null}
    </div>
</section>
`;

const teamTemplate = (team, members) => html`
 <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${findNumberOfMembers(team._id, members)} Members</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>
`;

export async function showBrowse(ctx) {

    const userId = ctx.user?._id;
    const page = Number(ctx.queery.page) || 1;
    
    const [teams, pages] = await Promise.all([getTeams(page), getPagesToShow()]);
    const members = await getMembers(teams);
    
    ctx.render(browseTemplate(ctx, teams , members, pages, page));
}


function findNumberOfMembers(teamId, listWithMembers) {
    const membersOfThatTeam = listWithMembers.filter(x => x.teamId == teamId);
    return membersOfThatTeam.length;
}
