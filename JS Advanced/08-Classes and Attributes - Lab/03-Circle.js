// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     get radius() {
//         return this._radius;
//     }

//     set radius(value) {
//         this._radius = value;
//     }

//     get diameter() {
//         return this._radius * 2;
//     }

//     set diameter(value) {
//         this._diameter = value;
//         this._radius = value / 2;
//     }

//     get area() {
//         return Math.PI * (this._radius ** 2);
//     }
// }

class Circle {
    #radius
    #diameter
    
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    set radius(value) {
        this.#radius = value;
    }

    get diameter() {
        return this.#radius * 2;
    }

    set diameter(value) {
        this.#diameter = value;
        this.#radius = value / 2;
    }

    get area() {
        return Math.PI * (this.#radius ** 2);
    }
}


let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
