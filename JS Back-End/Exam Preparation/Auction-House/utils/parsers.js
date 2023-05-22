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

module.exports =  parseError;