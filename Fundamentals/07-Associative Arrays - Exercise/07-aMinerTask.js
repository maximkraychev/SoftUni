function aMinerTask(input) {

    const objResource = {};
    const inputLength = input.length;

    for (let index = 0; index < inputLength; index += 2) {
        const resource = input[index];
        const quantity = Number(input[index + 1]);

        if (!objResource.hasOwnProperty(resource)) {
            objResource[resource] = 0;
        }

        objResource[resource] += quantity;
    }

    for (let key in objResource) {
        console.log(`${key} -> ${objResource[key]}`);
    }

}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
); 