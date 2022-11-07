function garage(input) {

    let garages = {}

    input.forEach(car => {
        car = car.split(' - ');
        const garageNumber = car.shift();
        const arrayOfCar = car[0].split(', ');

        arrayOfCar.forEach(car => {
            const [key, value] = car.split(': ');
            if (!garages[garageNumber]) {
                garages[garageNumber] = [];
            }
            garages[garageNumber].push([key, value]);
        })
    })

    const entriesOfGarages = Object.entries(garages);
    for (let [garageNumber, arrayOfCarsArr] of entriesOfGarages) {
        console.log(`Garage № ${garageNumber}`);
        let arrayOfCars = arrayOfCarsArr.map(carArr => {
            carArr = carArr.join(' - ')
            return carArr
        })

        let finalLine = '--- '
        arrayOfCars.forEach((car, index) => {
            finalLine += car;
            if (index < arrayOfCars.length - 1) {
                finalLine += ', '
            }
        })
        console.log(finalLine);
    }
}

//garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)