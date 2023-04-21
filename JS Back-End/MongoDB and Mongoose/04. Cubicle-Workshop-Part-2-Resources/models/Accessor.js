const {Schema, model, Types} = require('mongoose');

const accessorSchema = new Schema({
    name: {type: String, require: true},
    imageUrl: {
        type: String, 
        require: true, 
        validator: function(value) {
            const regex = /^(?:https?|http)/g;
            return regex.test(value);
        },
        message: props => `${props.value} is not a valid URL` },
    description: {type: String, require: true, maxlength: 20},
    cubes: {type: [Types.ObjectId], default: [], ref: 'Cube'}
});

const Accessor = model('Accessor', accessorSchema);

module.exports = Accessor