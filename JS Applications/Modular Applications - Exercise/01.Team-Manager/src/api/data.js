import * as api from './api.js';

const pageSize = 2;

const endpoints = {
    teams: '/data/teams',
    getMembers: '/data/members?where=',
    team: '/data/teams/',
    getMemberships: (teamId) => `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`,
    becomeMember: '/data/members',
    member: '/data/members/',
}

export async function getTeams(page = 1) {
    const offset = (page - 1) * pageSize;
    return api.get(endpoints.teams + `?offset=${offset}&pageSize=${pageSize}`);
}

export async function getMembers(teams) {
    const encodedURL = encodeURIComponent('teamId IN (' + teams.map(x => `"${x._id}"`).join(',') + ') AND status="member"');
    return api.get(endpoints.getMembers + encodedURL);
}

export async function getPagesToShow() {
    const size = await api.get(endpoints.teams + '?count');
    const pages = Math.ceil(size / pageSize);
    return pages;
}

export async function createTeam(data) {
    return api.post(endpoints.teams, data);
}

export async function getTeam(teamId) {
    return api.get(endpoints.team + teamId);
}

export async function editTeam(teamId, data) {
    return api.put(endpoints.team + teamId, data);
}

export async function getMemberships(teamId) {
    return api.get(endpoints.getMemberships(teamId));
}

export async function requestForNewMember(teamId) {
    return api.post(endpoints.becomeMember, {teamId});
}

export async function approveMembership(userId) {
    return api.put(endpoints.member + userId);
} 

export async function cancelOrLeave(userId) {
    return api.delete(endpoints.member + userId);
}