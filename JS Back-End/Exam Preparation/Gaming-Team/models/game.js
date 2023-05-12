const { Schema, model, Types } = require('mongoose');

const gameSchema = new Schema({
    name: { type: String, require: true, minLength: [4, 'The name should be at least four characters'] },
    image: { type: String, require: true, validate: [/^https?:\/\//i, 'The game image should start with "http://" or "https://"'] },
    price: { type: Number, require: true, min: [1, 'The price should be a positive number'] },
    description: { type: String, require: true, minLength: [10, 'The description should be at least ten characters long'] },
    genre: { type: String, require: true, minLength: [2, 'The genre should be at least two characters long'] },
    platform: { type: String, enum: { values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'], message: 'Invalid platform' }, require: true },
    boughtBy: { type: [Types.ObjectId], require: true },
    owner: { type: Types.ObjectId }
});

const Game = model('Game', gameSchema);

module.exports = Game;