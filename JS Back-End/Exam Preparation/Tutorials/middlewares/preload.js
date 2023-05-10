const { getCourseByIdRow, getCourseById } = require("../services/course");

module.exports = (boolean) => async (req, res, next) => {
    if (req.params.id) {

        try {
            if (boolean) {
                res.locals.course = await getCourseByIdRow(req.params.id);
            } else {
                res.locals.course = await getCourseById(req.params.id);
            }
        } catch (err) {
            console.log(err);
            res.redirect('/');
            //TODO... somehow the error should be displayed so the user knows there have been an error;
        }

    }

    next();
}