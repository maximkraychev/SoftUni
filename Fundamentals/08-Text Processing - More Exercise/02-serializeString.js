function serializeString(input) {

    const serializeString = {};
    const text = input[0];

    for (let index = 0; index < text.length; index++) {
        const char = text[index];

        if (!serializeString.hasOwnProperty(char)) {
            serializeString[char] = index;
        } else {
            serializeString[char] += `/${index}`
        }
    }

    for (const char in serializeString) {
        console.log(`${char}:${serializeString[char]}`);
    }
}

//serializeString(["abababa"]);

serializeString(["avjavamsdmcalsdm"])