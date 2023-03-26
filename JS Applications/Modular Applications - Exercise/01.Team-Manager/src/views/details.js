import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemberships, getTeam, requestForNewMember } from '../api/data.js';
import { anchorHandler } from '../util.js';

const detailsTemplate = (team, members, pendingRequests, userInfo) => html`
<section id="team-home">
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${members.length} Members</span>
            <div>
                ${userInfo.isTeamOwner 
                    ? html`
                        <a href="/edit/${team._id}" class="action">Edit team</a>`
                    : null}
                
                ${userInfo.isUser && !userInfo.isAlreadyMember && !userInfo.isPendingUser
                    ? html`
                        <a @click=${joinTeam.bind(null, team._id)} href="javascript:void(0)" class="action">Join team</a>` 
                    : null}
                
                ${userInfo.isAlreadyMember && !userInfo.isTeamOwner 
                    ? html`
                        <a href="javascript:void(0)" class="action invert">Leave team</a>` 
                    : null}
               
                ${userInfo.isPendingUser 
                    ? html`
                        Membership pending. <a href="javascript:void(0)">Cancel request</a>` 
                    : null}
                
            </div>
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                <li>My Username</li>
                ${members.map(x => userTemplate(x, userInfo))}
            </ul>
        </div>
        <div class="pad-large">
            ${userInfo.isTeamOwner 
            ? html`
                <h3>Membership Requests</h3>
                    <ul class="tm-members">
                        ${pendingRequests.map(x => membershipTemplate(x))}
                    </ul>` 
            : null}
        </div>
    </article>
</section>
`;


const userTemplate = (user, userInfo) => html`
<li>${user.user.username} ${userInfo.isTeamOwner && !userInfo.checkIsOwner(user.user._id) 
? html`<a href="javascript:void(0)" class="tm-control action">Remove from team</a>` 
: null}</li>`;

const membershipTemplate = (member) => html`
<li>${member.user.username}
    <a href="javascript:void(0)" class="tm-control action">Approve</a>
    <a href="javascript:void(0)"class="tm-control action">Decline</a>
</li>
`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const userId = ctx.user?._id;
    const teamId = ctx.params.id;
    const [team, listOfPeople] = await Promise.all([getTeam(teamId), getMemberships(teamId)])

    const members = [];
    const pendingRequests = [];
    listOfPeople.forEach(x => x.status == 'member' ? members.push(x) : pendingRequests.push(x));

    const isGuest = userId == undefined;
    const isUser = userId != undefined;
    const isPendingUser = pendingRequests.some(x => x.user._id == userId);
    const isAlreadyMember = members.some(x => x.user._id == userId);
    const isTeamOwner = userId == team._ownerId;
    const checkIsOwner = checkForOwner.bind(null, team._ownerId);

    const userInfo = {
        isGuest,
        isUser,
        isPendingUser,
        isAlreadyMember,
        isTeamOwner,
        checkIsOwner
    }
    ctx.render(detailsTemplate(team, members, pendingRequests, userInfo));
}


function checkForOwner(ownerId, userId) {
    if (ownerId == userId) {
        return true;
    } else {
        return false;
    }
}

async function joinTeam(teamId, event) {

    const anchorElement= event.currentTarget;
    const showHideElement = anchorHandler.bind(null, anchorElement);
    
    try{
        showHideElement('hide');
        await requestForNewMember(teamId);
        context.page.redirect(context.path);
        
    } catch(err) {
        showHideElement('show');
    }
}




// const anchorElement= event.currentTarget;
// const showHideElement = anchorElement.bind(null, anchorElement);

// try{
//     showHideElement('hide');
    
//     showHideElement('show')
// } catch(err) {
//     showHideElement('show');
// }



