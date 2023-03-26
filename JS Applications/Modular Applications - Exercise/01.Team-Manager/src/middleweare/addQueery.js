
export function addQueery(ctx, next) {
    if (ctx.querystring != '') {
        ctx.queery = Object.fromEntries(ctx.querystring
            .split('&')
            .map(x => x.split('=')));

    } else {
        ctx.queery = {};
    }
    next();
}