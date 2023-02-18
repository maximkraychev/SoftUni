const { expect } = require("chai");
const findNewApartment = require('../findApartment');

describe('Task 3', function () {
    describe('Method 1', () => {
        it('Should throw error with incorect input', () => {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isGoodLocation('a', 1)).to.throw(Error, 'Invalid input!');
        });

        it('Should return string if the city is not Sofia || Plovdiv || Varna', () => {
            expect(findNewApartment.isGoodLocation('a', true)).to.equal('This location is not suitable for you.');
        });

        it('Should return string if the first par is correct and the second parametar is true', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        });

        it('Should return string if the first par is correct and the second parametar is false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        });
    });

    describe('Method 2', () => {
        it('Should throw error with incorect input', () => {
            expect(() => findNewApartment.isLargeEnough('a', 1)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], 1)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isLargeEnough([1], '1')).to.throw(Error, 'Invalid input!');
        });

        it('Should return the correct string', () => {
            expect(findNewApartment.isLargeEnough([1], 2)).to.equal('');
        });
        it('Should return the correct string', () => {
            expect(findNewApartment.isLargeEnough([1, 2], 2)).to.equal('2');
        });
        it('Should return the correct string', () => {
            expect(findNewApartment.isLargeEnough([1, 2, 3], 2)).to.equal('2, 3');
        });
    });

    describe('Method 3', () => {
        it('Should throw error with incorect input', () => {
            expect(() => findNewApartment.isItAffordable('a', 1)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, 'a')).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(0, 1)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, 0)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => findNewApartment.isItAffordable(1, -1)).to.throw(Error, 'Invalid input!');
        });

        it('Should return the string if the result is lower than 0', () => {
            expect(findNewApartment.isItAffordable(2, 1)).to.equal("You don't have enough money for this house!");
        });

        it('Should return the string if the result is higher or equal to 0', () => {
            expect(findNewApartment.isItAffordable(1, 1)).to.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(1, 2)).to.equal('You can afford this home!');
        });
    });
});