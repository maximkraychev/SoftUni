const { getHotelByIdRaw, getHotelById } = require("../services/hotel");

function preloadHotel(boolean) {
    return async (req, res, next) => {
        try {
            if (boolean) {
                res.locals.hotel = await getHotelByIdRaw(req.params.id);
            } else {
                res.locals.hotel = await getHotelById(req.params.id);
            }
            next();
        } catch(err) {
            //TODO decide what to do if there are no id or there is some problem with database;
            console.log(err);
        }
    }
}

module.exports = {
    preloadHotel
}