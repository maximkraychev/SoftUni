function addressBook(input) {

    // create and fill the object with the input
    const objAddressBook = {};

    for (const line of input) {
        const [name, addres] = line.split(':');
        objAddressBook[name] = addres;
    }

    // we take the keys and sort them 
    const keysOfObjAddressbook = Object.keys(objAddressBook).sort((a, b) => a.localeCompare(b));

    //print the output

    keysOfObjAddressbook.forEach(name => {
        console.log(`${name} -> ${objAddressBook[name]}`);
    })




    // With Maps -/-/-/-/-/-/-/-/-/





    // create and fill the map with the input
    const mapAddressBook = new Map();

    for (const line of input) {
        const [name, addres] = line.split(':');
        mapAddressBook.set(name, addres);
    }

    // we neeed to sort the map by key
    const sortedMapAddressBook = new Map()
    const sortedKeysFromAddressBook = [];

    // fill the array
    mapAddressBook.forEach((addres, name) => {
        sortedKeysFromAddressBook.push(name);
    })

    // sort the array
    sortedKeysFromAddressBook.sort((a, b) => a.localeCompare(b));

    // add sorted information in sortedMapAddressBook
    sortedKeysFromAddressBook.map(key => {
        sortedMapAddressBook.set(key, mapAddressBook.get(key))
    })

    sortedMapAddressBook.forEach((addres, name) => {
        console.log(name + ' -> ' + addres);
    })

}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);