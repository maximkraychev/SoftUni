import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemberships, getTeam, requestForNewMember, approveMembership } from '../api/data.js';
import { anchorHandler } from '../util.js';

const detailsTemplate = (team, teamInfo, userInfo) => html`
<section id="team-home">
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${teamInfo.members.length} Members</span>
            <div>
                ${userInfo.isTeamOwner()
                    ? html`
                        <a href="/browse/${team._id}/edit" class="action">Edit team</a>`
                    : null}
                
                ${userInfo.isUser() && !userInfo.isAlreadyMember() && !userInfo.isPendingUser()
                    ? html`
                        <a @click=${joinTeam.bind(null, team._id, teamInfo)} href="javascript:void(0)" class="action">Join team</a>` 
                    : null}
                
                ${userInfo.isAlreadyMember() && !userInfo.isTeamOwner() 
                    ? html`
                        <a href="javascript:void(0)" class="action invert">Leave team</a>` 
                    : null}
               
                ${userInfo.isPendingUser() 
                    ? html`
                        Membership pending. <a href="javascript:void(0)">Cancel request</a>` 
                    : null}
                
            </div>
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                <li>My Username</li>
                ${teamInfo.members.map(x => userTemplate(x, userInfo))}
            </ul>
        </div>
        <div class="pad-large">
            ${userInfo.isTeamOwner 
            ? html`
                <h3>Membership Requests</h3>
                    <ul class="tm-members">
                        ${teamInfo.pendingRequests.map(x => membershipRequestsTemplate(x, userInfo, teamInfo))}
                    </ul>` 
            : null}
        </div>
    </article>
</section>
`;


const userTemplate = (user, userInfo) => html`
<li>${user.user.username} 
    ${userInfo.isTeamOwner() && !userInfo.checkIsOwner(user.user._id) 
    ? html`<a href="javascript:void(0)" class="tm-control action">Remove from team</a>` 
    : null}
</li>`;

const membershipRequestsTemplate = (member, userInfo, teamInfo) => html`
<li>
    ${userInfo.isTeamOwner() 
        ? html` 
            ${member.user.username}
            <a @click=${approve.bind(null, member, teamInfo)} href="javascript:void(0)" class="tm-control action">Approve</a>
            <a href="javascript:void(0)"class="tm-control action">Decline</a>` 
        : null}
</li>`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    
    const teamInfo = {
        members: [],
        pendingRequests: [],
    }

    const userId = ctx.user?._id;
    const teamId = ctx.params.id;
    const [team, listOfPeople] = await Promise.all([getTeam(teamId), getMemberships(teamId)])

    listOfPeople.forEach(x => x.status == 'member' ? teamInfo.members.push(x) : teamInfo.pendingRequests.push(x));

    const userInfo = {
        isGuest: () => userId == undefined,
        isUser: () => userId != undefined,
        isPendingUser: () => teamInfo.pendingRequests.some(x => x._ownerId == userId),
        isAlreadyMember: () => teamInfo.members.some(x => x._ownerId == userId),
        isTeamOwner: () => userId == team._ownerId,
        checkIsOwner: checkForOwner.bind(null, team._ownerId),
    }

    ctx.update = update.bind(null, ctx, team, teamInfo, userInfo);
    ctx.update();
}


function update(ctx, ...params) {
    ctx.render(detailsTemplate(...params));
}


function checkForOwner(ownerId, userId) {
    if (ownerId == userId) {
        return true;
    } else {
        return false;
    }
}

async function joinTeam(teamId, teamInfo, event) {

    const anchorElement= event.currentTarget;
    const showHideElement = anchorHandler.bind(null, anchorElement);
    
    try{
        showHideElement('hide');
        const pendingData = await requestForNewMember(teamId);

        const userData = context.user;
        // We should remove the accsesToken before pushing the userData;
        pendingData.user = userData;
        teamInfo.pendingRequests.push(pendingData);
        context.update();
    } catch(err) {
        showHideElement('show');
    }
}


async function approve(member, teamInfo, event) {
    const anchorElement= event.currentTarget;
    const showHideElement = anchorHandler.bind(null, anchorElement);

    try {
        showHideElement('hide');
        member.status = 'member';
        console.log(member);
        const approvedMember = await approveMembership(member._id, member);
        console.log(approvedMember);
        // After there is no error with the fetch request for approval, we make the same thing localy 
        // by removing the member from pendingRequests array and adding it into the members array,
        // that way litHTML can reRender only the changes without making new fetch requests for the both arrays;
        const indexOfAlreadyApprovedMember = teamInfo.pendingRequests.findIndex(x => x._id == approvedMember._id);
        teamInfo.pendingRequests.splice(indexOfAlreadyApprovedMember, 1);
        teamInfo.members.push(approvedMember);

        context.update()
    } catch (err) {
        showHideElement('show');
    }
   


} 


async function onCancelOrLeave() {

}




// const anchorElement= event.currentTarget;
// const showHideElement = anchorElement.bind(null, anchorElement);

// try{
//     showHideElement('hide');
    
//     showHideElement('show')
// } catch(err) {
//     showHideElement('show');
// }



