function train(array) {

    let wagonsWithPassengers = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());

    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {
        let command = array[index].split(' ');

        if (command[0] === 'Add') {

            let newPassangers = Number(command[1])
            wagonsWithPassengers.push(newPassangers);

        } else {

            for (let j = 0; j < wagonsWithPassengers.length; j++) {

                let currenWagonPassengers = wagonsWithPassengers[j];
                let newPassangers = Number(command[0])

                if (currenWagonPassengers + newPassangers <= capacity) {
                    wagonsWithPassengers[j] += newPassangers;
                    break;
                }
            }
        }
    }

    console.log(wagonsWithPassengers.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)