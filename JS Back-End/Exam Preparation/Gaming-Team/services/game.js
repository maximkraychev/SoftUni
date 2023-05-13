const Game = require("../models/game");

async function createGame({platform, name, image, price, genre, description}, owner) {
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

module.exports = {
    createGame,
    getAllGames
}