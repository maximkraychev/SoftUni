function garage(input) {

    let garages = {}

    input.forEach(car => {
        car = car.split(' - ');
        const garageNumber = car.shift();
        const arrayOfCar = car[0].split(', ');
        if (!garages[garageNumber]) {
            garages[garageNumber] = '--- ';
        }

        for (let index = 0; index < arrayOfCar.length; index++) {
            const [key, value] = arrayOfCar[index].split(': ');
            if (index === 0 && garages[garageNumber] !== '--- ') {
                garages[garageNumber] += '\n--- '
            }
            if (index >= arrayOfCar.length - 1) {
                garages[garageNumber] += `${key} - ${value}`;
            } else {
                garages[garageNumber] += `${key} - ${value}, `;
            }

        }
    })

    let entries = Object.entries(garages);
    for (let [key, value] of entries) {
        console.log(`Garage № ${key}`);
        console.log(value);
    }
}

//garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)