function solution() {
    // First class

    function Balloon(color, gasWeight) {
        this.color = color;
        this.gasWeight = gasWeight;
    }
    Balloon.prototype = Object.create({});

    //------------------------------------------------------------------------
    // Second class

    function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
        Balloon.call(this, color, gasWeight);
        this._ribbon = {
            color: ribbonColor,
            length: ribbonLength,
        }
    }

    PartyBalloon.prototype = Object.create(Balloon.prototype);
    Object.defineProperty(PartyBalloon.prototype, 'ribbon', {
        get() {
            return this._ribbon;
        },

        // set(value) {
        //     this._ribbon = value;
        // }
    })

    //-----------------------------------------------------------------------
    // Third class

    function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {
        PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);
        this._text = text;
    }

    BirthdayBalloon.prototype = Object.create(PartyBalloon);
    Object.defineProperty(BirthdayBalloon.prototype, 'text', {
        get() {
            return this._text;
        },
        // set(value) {
        //     this._text = value;
        // }
    })

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}

let classes = solution();
// let testBalloon = new classes.Balloon("yellow", 20.5);
// let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
// let ribbon = testPartyBalloon.ribbon;
// console.log(testBalloon);
// console.log(testPartyBalloon);
// console.log(ribbon);

const test = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25, 'Party');
console.log(test);
test.text = 'Stop the party'
console.log(test.text);
