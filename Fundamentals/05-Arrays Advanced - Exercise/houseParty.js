function houseParty(array) {

    let listGuests = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentComand = array[i].split(' ');
        let name = currentComand[0];

        if (!currentComand.includes('not')) {

            if (listGuests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                listGuests.push(name);
            }

        } else {

            if (listGuests.includes(name)) {
                let index = listGuests.indexOf(name);
                listGuests.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    listGuests.forEach(guest => console.log(guest));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)