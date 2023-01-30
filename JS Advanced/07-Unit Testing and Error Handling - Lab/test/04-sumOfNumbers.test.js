const expect = require('chai').expect;
const sum = require('../04-sumOfNumbers.js');

describe('Sum of Numbers', () => {
    it('Should return the sum of the numbers in the array', () => {
        const numbers = [1, 2, 3, 4, 5];
        const expectedSum = 15;

        const actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return the sum of the numbers in the array, test with negative number in the array', () => {
        const numbers = [1, 2, 3, 4, -5];
        const expectedSum = 5;

        const actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    })

    it('Should return zero when the input array contains only zeroes', () => {
        const numbers = [0, 0, 0, 0, 0,];
        const expectedSum = 0;

        const actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    })
})


