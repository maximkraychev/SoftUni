const { Schema, model, Types } = require('mongoose');

const accessorSchema = new Schema({
    name: { type: String, require: true },
    imageUrl: {
        type: String,
        require: true,
        validate: {
            validator: (value) => /^(?:https?|http)/g.test(value),
            message: props => `${props.value} is not a valid URL`
        }
    },
    description: { type: String, require: true, maxlength: 50 },
    //cubes: { type: [Types.ObjectId], default: [], ref: 'Cube' }  This is needed if 'many to many' 
});

const Accessory = model('Accessory', accessorSchema);

module.exports = Accessory