const { getCubeById } = require("../services/cubeService");

function isUser() {
    return (req, res, next) => {
        if (req.user == undefined) {
            res.redirect('/auth/login');
        } else {
            next();
        }
    }
}

//Is trade off, good for 'Separation of concerns principle' but we need one more additional search in MongoDB;
function isOwner() {
    return async (req, res, next) => {
        // Its done that so it works for attaching accessory and for edit cube;
        const matches = /^\/attach\/accessory\/(\w*)$/g.exec(req.originalUrl) || /^\/details\/edit\/(\w*)$/g.exec(req.originalUrl);

        if (matches != null) {
            const cubeId = matches[1];
            const cube = await getCubeById(cubeId);
            const ownerId = cube.ownerId.toString();
            const userId = req.user._id

            if (ownerId == userId) {
                next();
            } else {
                res.redirect('/auth/login')
            }
        } else {
            res.status(404).render('404', { title: 'Page Not Found' });
        }
    }
}

module.exports = {
    isUser,
    isOwner
}
