function needForSpeedIII(input) {

    // 01. Take the cars and info for them that we have recived and store them in object;
    const numberOfCars = Number(input.shift());
    let carsInfo = {};
    const maxMileage = 100000;
    const minMileage = 10000;
    const tankMax = 75;

    for (let index = 0; index < numberOfCars; index++) {
        const [car, mileage, fuel] = input.shift().split('|');
        carsInfo[car] = {
            'mileage': Number(mileage),
            'fuel': Number(fuel),
        }
    }

    // 02. Do a while loop until reciving 'Stop' and execute the given commands; 
    let line = input.shift();

    while (line !== 'Stop') {

        let [command, car, ...values] = line.split(' : ');

        switch (command) {
            case 'Drive':
                const distance = Number(values[0]);
                const fuel = Number(values[1]);

                if (carsInfo[car]['fuel'] < fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    carsInfo[car]['mileage'] += distance;
                    carsInfo[car]['fuel'] -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                    if (carsInfo[car]['mileage'] >= maxMileage) {
                        console.log(`Time to sell the ${car}!`);
                        delete carsInfo[car];
                    }
                }
                break;

            case 'Refuel':
                let refill = Number(values[0]);
                const currentFuelInTank = carsInfo[car]['fuel']

                if (currentFuelInTank + refill > tankMax) {
                    refill = tankMax - currentFuelInTank;
                }

                carsInfo[car]['fuel'] += refill;
                console.log(`${car} refueled with ${refill} liters`);
                break;

            case 'Revert':
                const kilometers = Number(values[0]);
                carsInfo[car]['mileage'] -= kilometers;

                if (carsInfo[car]['mileage'] < minMileage) {
                    carsInfo[car]['mileage'] = minMileage;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }

        line = input.shift();
    }

    // 03. After reciving 'Stop' print the result needed; 
    for (const car in carsInfo) {
        console.log(`${car} -> Mileage: ${carsInfo[car]['mileage']} kms, Fuel in the tank: ${carsInfo[car]['fuel']} lt.`);
    }
}

// needForSpeedIII([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]
// );

needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)