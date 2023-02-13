const { expect } = require("chai");
const flowerShop = require('../flowerShop');

describe('flowerShop', function () {
    describe('calcPriceOfFlowers', () => {

        it('Should throw an error with invalid type as input', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('a', '1', 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('a', 1, '1')).to.throw(Error, 'Invalid input!');
        });

        it('Should work correctly', () => {
            expect(flowerShop.calcPriceOfFlowers('a', 1, 1)).to.equal('You need $1.00 to buy a!');
            expect(flowerShop.calcPriceOfFlowers('a', 2, 2)).to.equal('You need $4.00 to buy a!');
        });
    });

    describe('checkFlowersAvailable', () => {
        it('Should return the flower are available', () => {
            //expect(flowerShop.checkFlowersAvailable('a', ['a'])).to.equal('The a are available!');
            expect(flowerShop.checkFlowersAvailable('a', ['a', 'b'])).to.equal('The a are available!');
        });

        it('Should return the flower are sold', () => {
            expect(flowerShop.checkFlowersAvailable('a', ['c', 'b'])).to.equal('The a are sold! You need to purchase more!');
            //expect(flowerShop.checkFlowersAvailable('a', [])).to.equal('The a are sold! You need to purchase more!');
        });
    });

    describe('sellFlowers', () => {
        it('Should throw an error with invalid type as input', () => {
            expect(() => flowerShop.sellFlowers('a', 1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], '1')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], -1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['a'], 1)).to.throw(Error, 'Invalid input!');
        });

        it('Should work correctly and remove the given index from the array', () => {
            expect(flowerShop.sellFlowers(['a'], 0)).to.equal('');
            expect(flowerShop.sellFlowers(['a', 'b'], 0)).to.equal('b');
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 1)).to.equal('a / c');
        });
    });
});
