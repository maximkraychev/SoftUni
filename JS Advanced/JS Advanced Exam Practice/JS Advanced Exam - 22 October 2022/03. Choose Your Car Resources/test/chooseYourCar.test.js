const { expect } = require("chai");
const { chooseYourCar } = require('../chooseYourCar');


describe("Choose Your Car", function () {
    describe("choosingType", () => {
        it('Should throw Error if the year is out of range', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw(Error, `Invalid Year!`);
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw(Error, `Invalid Year!`);
        });

        it('Should throw Error if the value of the first paramater is diffrent from Sedan', () => {
            expect(() => chooseYourCar.choosingType('a', 'red', 2011)).to.throw(Error, `This type of car is not what you are looking for.`);
        });
        
        it('If the car is newer than 2009', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        });

        it('If the car is older than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.equal('This Sedan is too old for you, especially with that red color.');
        });
    });

    describe('brandName', () => {
        it('Should throw Error if the brands is not array', () => {
            expect(() => chooseYourCar.brandName('a', 1)).to.throw(Error, `Invalid Information!`);
        });
        it('Should throw Error if the brandIndex is not integer', () => {
            expect(() => chooseYourCar.brandName([], 1.1)).to.throw(Error, `Invalid Information!`);
        });
        it('Should throw Error if the brandIndex is smaller than 0 and bigger than brands length - 1', () => {
            expect(() => chooseYourCar.brandName([], -1)).to.throw(Error, `Invalid Information!`);
            expect(() => chooseYourCar.brandName(['Toyota'], 1)).to.throw(Error, `Invalid Information!`);
        });
        it('Should return the new array without the specified index', () => {
            expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1)).to.equal('BMW, Peugeot');
        });
    });

    describe('carFuelConsumption', () => {
        it('Should throw error if the input is not a number', () => {
            expect(() => chooseYourCar.carFuelConsumption('a', 1)).to.throw(Error, `Invalid Information!`);
            expect(() => chooseYourCar.carFuelConsumption(1, 'a')).to.throw(Error, `Invalid Information!`);
        });

        it('Should throw error if the input is negative number', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, 1)).to.throw(Error, `Invalid Information!`);
            expect(() => chooseYourCar.carFuelConsumption(1, -1)).to.throw(Error, `Invalid Information!`);
            expect(() => chooseYourCar.carFuelConsumption(0, 1)).to.throw(Error, `Invalid Information!`);
            expect(() => chooseYourCar.carFuelConsumption(1, 0)).to.throw(Error, `Invalid Information!`);
        });

        it('Should the string if it burns more than 7 liters per 100 km', () => {
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal('The car burns too much fuel - 10.00 liters!');
            expect(chooseYourCar.carFuelConsumption(200, 20)).to.equal('The car burns too much fuel - 10.00 liters!');
        });
        it('Should the string if it burns less than or 7 liters per 100 km', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
        });
    });
});
