const Game = require("../models/game");

async function createGame({ platform, name, image, price, genre, description }, owner) {
    price = Number(price);

    return Game.create({
        platform,
        name,
        image,
        price,
        genre,
        description,
        owner
    });
}

async function getAllGames() {
    return Game.find({}).lean();
}

async function getGameRow(id) {
    return Game.findById(id);
}

async function getGame(id) {
    return Game.findById(id).lean();
}

async function deleteGame(id) {
    return Game.findByIdAndDelete(id);
}

module.exports = {
    createGame,
    getAllGames,
    getGameRow,
    getGame,
    deleteGame
}