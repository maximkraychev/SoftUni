const { Schema, model, Types } = require('mongoose');

const cubeSchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true, maxlength: 20 },
    imageUrl: {
        type: String,
        require: true,
        validator: (value) => /^(?:https?|http)/g.test(value),
        message: props => `${props.value} is not a valid URL`
    },
    difficultyLevel: { type: Number, require: true, min: [1, 'Minimum difficalty level is 1'], max: [6, 'Maximum difficalty leel is 6'] },
    accessories: {type: [Types.ObjectId], default: [], ref: 'Accessor'}
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;