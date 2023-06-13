function defaultTitle() {
    return (req, res, next) => {
        res.locals.title = 'Petstagram';
        next();
    }
}

module.exports = {
    defaultTitle
}