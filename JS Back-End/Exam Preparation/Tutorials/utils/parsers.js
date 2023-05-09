function parseError(error) {
    const result = {
        messages: [],
        fields: {}
    };

    if (error.name == 'ValidationError') {
        for (let [field, e] of Object.entries(error.errors)) {
            result.messages.push(e.message);
            result.fields[field] = field;
        }
    } else {
        result.messages = error.message.split('\n');
    }

    return result;
}

function dateParser() {
    const date = new Date();
    const firstPart = date.toString().slice(0, 10);
    const secondPart = date.toTimeString().slice(0, 8);

    return firstPart + ' ' + secondPart;
}

module.exports = {
    parseError,
    dateParser
};