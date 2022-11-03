function storage(input) {

    const objStorage = {};

    for (line of input) {
        let [item, quantity] = line.split(' ')
        quantity = Number(quantity);

        if (objStorage.hasOwnProperty(item)) {
            objStorage[item] += quantity;
        } else {
            objStorage[item] = quantity;
        }
    }

    for (const key in objStorage) {
        console.log(key + ' -> ' + objStorage[key]);
    }

    //// With maps

    const mapStorage = new Map();

    for (line of input) {
        let [item, quantity] = line.split(' ')
        quantity = Number(quantity);

        if (mapStorage.has(item)) {
            quantity += Number(mapStorage.get(item));
        }
        mapStorage.set(item, quantity)
    }

    for (const [item, quantity] of mapStorage.entries()) {
        console.log(item + ' -> ' + quantity);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);