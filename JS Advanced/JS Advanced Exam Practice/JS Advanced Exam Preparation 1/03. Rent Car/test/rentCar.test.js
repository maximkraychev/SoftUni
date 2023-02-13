const { expect } = require("chai");
const rentCar = require('../rentCar');

describe("Rent Car", function () {
    describe("searchCar", () => {
        it('Should throw error with not valid inputs', () => {
            expect(() => rentCar.searchCar({}, 'a')).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.searchCar('a', 'a')).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.searchCar(true, 'a')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['a'], 1)).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.searchCar(['a'], [])).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.searchCar(['a'], true)).to.throw(Error, 'Invalid input!');
        });

        it('Should throw error if there are no match', () => {
            expect(() => rentCar.searchCar([], 'a')).to.throw(Error, 'There are no such models in the catalog!');
            expect(() => rentCar.searchCar(['b', 'c'], 'a')).to.throw(Error, 'There are no such models in the catalog!');
            //expect(() => rentCar.searchCar(['a', 'b'], 'c')).to.throw(Error, 'There are no such models in the catalog!');
        });

        it('Should return the length of the matched words in the catalog', () => {
            expect(rentCar.searchCar(['a'], 'a')).to.equal('There is 1 car of model a in the catalog!');
            expect(rentCar.searchCar(['a', 'b', 'c'], 'a')).to.equal('There is 1 car of model a in the catalog!');
            //expect(rentCar.searchCar(['a', 'b', 'a'], 'a')).to.equal('There is 2 car of model a in the catalog!');

        });
    });
    describe("searchCar", () => {
        it('Should throw error with not valid inputs', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.calculatePriceOfCar([], 1)).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.calculatePriceOfCar(true, 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('a', 1.1)).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.calculatePriceOfCar('a', 'a')).to.throw(Error, 'Invalid input!');
            // expect(() => rentCar.calculatePriceOfCar('a', [])).to.throw(Error, 'Invalid input!');
        });

        it('Should throw error if there is no such model in the catalog', () => {
            expect(() => rentCar.calculatePriceOfCar('a', 1)).to.throw(Error, 'No such model in the catalog!');
            // expect(() => rentCar.calculatePriceOfCar('b', 1)).to.throw(Error, 'No such model in the catalog!');
            // expect(() => rentCar.calculatePriceOfCar('c', 1)).to.throw(Error, 'No such model in the catalog!');
        });

        it('Should return the model and the price', () => {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.equal('You choose Volkswagen and it will cost $20!');
            // expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal('You choose Audi and it will cost $36!');
            // expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.equal('You choose Toyota and it will cost $80!');
            // expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');
            expect(rentCar.calculatePriceOfCar('Mercedes', 3)).to.equal('You choose Mercedes and it will cost $150!');
        });

        // it('Should return the model and the price 0 if the days are 0', ()=>{
        //     expect(rentCar.calculatePriceOfCar('Volkswagen', 0)).to.equal('You choose Volkswagen and it will cost $0!');
        //     expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equal('You choose Audi and it will cost $0!');
        //     expect(rentCar.calculatePriceOfCar('Toyota', 0)).to.equal('You choose Toyota and it will cost $0!');
        // });

        // it('Should return negative number if the input for days is negative', ()=>{
        //     expect(rentCar.calculatePriceOfCar('Volkswagen', -1)).to.equal('You choose Volkswagen and it will cost $-20!');
        //     expect(rentCar.calculatePriceOfCar('Audi', -1)).to.equal('You choose Audi and it will cost $-36!');
        //     expect(rentCar.calculatePriceOfCar('Toyota', -2)).to.equal('You choose Toyota and it will cost $-80!');
        // });
    });
    describe("checkBudget", () => {
        it('Should throw error with not valid inputs', () => {
            expect(() => rentCar.checkBudget(1.2, 1, 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 1.2, 1)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(1, 1, 1.2)).to.throw(Error, 'Invalid input!');
        })

        it('Should return you need bigger budget if the budget is not enough', () => {
            expect(rentCar.checkBudget(2, 2, 1)).to.equal('You need a bigger budget!');
        });

        it('Should return you rent a car if the budget is enough', () => {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal('You rent a car!');
        });
    });
});
