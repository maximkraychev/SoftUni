class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const foundedCar = this.availableCars.find(car => car.model === model);
        if (foundedCar == undefined) {
            throw new Error(`${model} was not found!`)
        }
        let soldPrice = foundedCar.price;

        if (foundedCar.mileage <= desiredMileage) {
        } else if (foundedCar.mileage - desiredMileage <= 40000) {
            soldPrice = foundedCar.price - (foundedCar.price * 0.05);
        } else if (foundedCar.mileage - desiredMileage > 40000) {
            soldPrice = foundedCar.price - (foundedCar.price * 0.10);
        }

        const index = this.availableCars.findIndex(x => x == foundedCar);
        const car = this.availableCars.splice(index, 1)[0];
        car.soldPrice = soldPrice;
        delete car.price;
        delete car.mileage;
        this.soldCars.push(car);
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length <= 0) {
            return 'There are no available cars';
        }
        let stringToReturn = '-Available cars:';

        this.availableCars.forEach(car => stringToReturn += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        return stringToReturn;
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        let sorted = null;
        if (criteria === 'horsepower') {
            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        if (criteria === 'model') {
            sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        const soldCarsLength = this.soldCars.length;
        let stringToReturn = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${soldCarsLength} cars sold:`;

        if (soldCarsLength > 0) {
            this.soldCars.forEach(car => stringToReturn += `\n---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        }
        return stringToReturn;
    }
}


// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// //console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


