class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        let newHex = null;
        if (typeof number == 'number') {
            newHex = new Hex(this.value + number);
        } else {
            newHex = new Hex(this.value + number.value)
        }
        return newHex;
    }

    minus(number) {
        let newHex = null;
        if (typeof number == 'number') {
            newHex = new Hex(this.value - number);
        } else {
            newHex = new Hex(this.value - number.value)
        }
        return newHex;
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
