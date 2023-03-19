import { getUserData } from "../util.js";


export function addSession(ctx, next) {
    const userData = getUserData();
    ctx.user = userData;
    next();
}