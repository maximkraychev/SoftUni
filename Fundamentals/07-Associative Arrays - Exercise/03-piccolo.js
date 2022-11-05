function piccolo(input) {

    const objOfCarsInTheParking = {};

    const inputLength = input.length;

    for (let index = 0; index < inputLength; index++) {
        const [command, carPlate] = input[index].split(', ');

        if (command === 'IN') {
            objOfCarsInTheParking[carPlate] = carPlate;
        } else if (command === 'OUT') {
            delete objOfCarsInTheParking[carPlate];
        }
    }

    let entries = Object.entries(objOfCarsInTheParking);

    if (entries.length < 1) {

        console.log("Parking Lot is Empty");

    } else {

        const sortedArray = entries.sort((a, b) => a[0].localeCompare(b[0]));

        sortedArray.forEach(carPlate => {
            console.log(carPlate[0]);
        })
    }
}

// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']
// )

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)