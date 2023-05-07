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
            console.log(err);
        }
    }
}

module.exports = {
    preloadHotel
}