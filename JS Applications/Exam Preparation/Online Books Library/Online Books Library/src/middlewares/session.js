import { getUserData } from "../util.js";


export function addSession(ctx, next) {
    const user = getUserData();
    ctx.user = user;
    next();
}