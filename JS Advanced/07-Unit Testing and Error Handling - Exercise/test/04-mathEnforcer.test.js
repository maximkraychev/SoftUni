const expect = require('chai').expect;
const mathEnforcer = require('../04-mathEnforcer');

describe('addFive', () => {
    it('should return correct result with a non-number parameter', () => {
        const inputs = ['asd', '5', true, false, undefined, [], {}, () => {}];

        for (const input of inputs) {
            const actualOutput = mathEnforcer.addFive(input);
            expect(actualOutput).to.be.undefined;
        }
    })

    it('should return correct result with number parameter', () => {
        const expectedOutput = 10;
        const actualOutput = mathEnforcer.addFive(5);

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('should return correct result with floating-point number parameter', () => {
        const expectedOutput = 10.1;
        const actualOutput = mathEnforcer.addFive(5.1);

        expect(actualOutput).to.be.closeTo(expectedOutput, 0.01);
    })

    it('should return correct result with negative number parameter', () => {
        const expectedOutput = 0;
        const actualOutput = mathEnforcer.addFive(-5);

        expect(actualOutput).to.equal(expectedOutput);
    })

});

describe('subtractTen', ()=> {
    it('should return correct result with a non-number parameter', () => {
        const inputs = ['asd', '5', true, false, undefined, [], {}, () => {}];

        for (const input of inputs) {
            const actualOutput = mathEnforcer.subtractTen(input);
            expect(actualOutput).to.be.undefined;
        }
    })

    it('should return correct result with number parameter', () => {
        const expectedOutput = 10;
        const actualOutput = mathEnforcer.subtractTen(20);

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('should return correct result with floating-point number parameter', () => {
        const expectedOutput = 10.1;
        const actualOutput = mathEnforcer.subtractTen(20.1);

        expect(actualOutput).to.be.closeTo(expectedOutput, 0.01);
    })
    
    it('should return correct result with negative number parameter', () => {
        const expectedOutput = -20;
        const actualOutput = mathEnforcer.subtractTen(-10);

        expect(actualOutput).to.equal(expectedOutput);
    })  
});

describe('sum', ()=> {
    it('should return correct result with a non-number parameter', () => {
        const inputs = ['asd', '5', true, false, undefined, [], {}, () => {}];

        for (const input of inputs) {
            const actualOutput = mathEnforcer.sum(input, 100);
            expect(actualOutput).to.be.undefined;

            const actualOutput2 = mathEnforcer.sum(100, input);
            expect(actualOutput2).to.be.undefined;

            const actualOutput3 = mathEnforcer.sum(input, input);
            expect(actualOutput3).to.be.undefined;
        }
    })

    it('should return correct result with number parameter', () => {
        const expectedOutput = 20;
        const actualOutput = mathEnforcer.sum(10, 10);

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('should return correct result with floating-point number parameter', () => {
        const expectedOutput = 20.1;

        const actualOutput = mathEnforcer.sum(10, 10.1);
        expect(actualOutput).to.be.closeTo(expectedOutput, 0.01);

        const actualOutput2 = mathEnforcer.sum(10.1, 10);
        expect(actualOutput2).to.be.closeTo(expectedOutput, 0.01);

        const actualOutput3 = mathEnforcer.sum(10.05, 10.05);
        expect(actualOutput3).to.be.closeTo(expectedOutput, 0.01);
    })  

    it('should return correct result with negative number parameter', () => {
        const expectedOutput = 0;

        const actualOutput = mathEnforcer.sum(-10, 10);
        expect(actualOutput).to.equal(expectedOutput);

        const actualOutput2 = mathEnforcer.sum(10, -10);
        expect(actualOutput2).to.equal(expectedOutput);

        const actualOutput3 = mathEnforcer.sum(-10, -10);
        expect(actualOutput3).to.equal(-20);
    })  
});