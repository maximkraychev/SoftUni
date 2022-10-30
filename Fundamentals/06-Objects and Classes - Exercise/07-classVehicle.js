class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = Number(fuel);
        this.parts.quality = parts.engine * parts.power;
    }

    drive(number) {
        this.fuel -= number
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
