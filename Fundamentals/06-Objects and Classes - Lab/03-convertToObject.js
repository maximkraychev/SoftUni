function convertToObject(JSONstring) {

    let object = JSON.parse(JSONstring);

    let entries = Object.entries(object);

    for ([key, value] of entries) {
        console.log(key + ': ' + value);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');