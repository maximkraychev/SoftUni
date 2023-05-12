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

module.exports = {
    createGame,
}