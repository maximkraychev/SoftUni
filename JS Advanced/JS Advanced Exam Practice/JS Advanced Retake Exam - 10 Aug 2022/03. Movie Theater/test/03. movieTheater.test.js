const { expect } = require("chai");
const { movieTheater } = require('../03. Movie Theater _Resources');

describe("Movie Theater", function () {

    describe("ageRestrictions", () => {
        it('Should return every true case', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        });

        it('Should return the default case', () => {
            expect(movieTheater.ageRestrictions('A')).to.equal('There are no age restrictions for this movie');
            expect(movieTheater.ageRestrictions(1)).to.equal('There are no age restrictions for this movie');
        });
    });

    describe("moneySpent", () => {
        it('Should throw error if invalid inputs', () => {
            expect(() => movieTheater.moneySpent('a', [], [])).to.throw(Error, 'Invalid input');
            expect(() => movieTheater.moneySpent(1, 'a', [])).to.throw(Error, 'Invalid input');
            expect(() => movieTheater.moneySpent(1, [], 'a')).to.throw(Error, 'Invalid input');
        });

        describe("Under 50", () => {
            it('Should return the correct otput (no food and drinks )', () => {
                expect(movieTheater.moneySpent(1, [], [])).equal('The total cost for the purchase is 15.00');
            });
            it('Should return the correct otput (test Nachos)', () => {
                expect(movieTheater.moneySpent(1, ['Nachos'], [])).equal('The total cost for the purchase is 21.00');
            });
            it('Should return the correct otput (test Popcorn)', () => {
                expect(movieTheater.moneySpent(1, ['Popcorn'], [])).equal('The total cost for the purchase is 19.50');
            });
            it('Should return the correct otput (test Popcorn && Nachos)', () => {
                expect(movieTheater.moneySpent(1, ['Popcorn', 'Popcorn', 'Nachos', 'Nachos'], [])).equal('The total cost for the purchase is 36.00');
            });
            it('Should return the correct otput (test Soda)', () => {
                expect(movieTheater.moneySpent(1, [], ['Soda'])).equal('The total cost for the purchase is 17.50');
            });
            it('Should return the correct otput (test Water)', () => {
                expect(movieTheater.moneySpent(1, [], ['Water'])).equal('The total cost for the purchase is 16.50');
            });
            it('Should return the correct otput (test Soda && Water)', () => {
                expect(movieTheater.moneySpent(1, [], ['Soda', 'Water','Soda', 'Water'])).equal('The total cost for the purchase is 23.00');
            });
            it('Should return the correct otput (test Popcorn && Nachos and Soda && Water)', () => {
                expect(movieTheater.moneySpent(1, ['Popcorn', 'Nachos', 'Popcorn', 'Nachos'], ['Soda', 'Water', 'Soda', 'Water'])).equal('The total cost for the purchase is 44.00');
            });
            it('Should return the correct otput (test with only food and drinks Popcorn && Nachos and Soda && Water)', () => {
                expect(movieTheater.moneySpent(0, ['Popcorn', 'Nachos'], ['Soda', 'Water'])).equal('The total cost for the purchase is 14.50');
            });
        });

        describe("Over 50", () => {
            it('Should return the correct otput (no food and drinks )', () => {
                expect(movieTheater.moneySpent(4, [], [])).equal('The total cost for the purchase with applied discount is 48.00');
            });
            it('Should return the correct otput (test Nachos)', () => {
                expect(movieTheater.moneySpent(3, ['Nachos', 'Nachos', 'Nachos'], [])).equal('The total cost for the purchase with applied discount is 50.40');
            });
            it('Should return the correct otput (test Popcorn)', () => {
                expect(movieTheater.moneySpent(4, ['Popcorn'], [])).equal('The total cost for the purchase with applied discount is 51.60');
            });
            it('Should return the correct otput (test Popcorn && Nachos)', () => {
                expect(movieTheater.moneySpent(3, ['Popcorn', 'Nachos'], [])).equal('The total cost for the purchase with applied discount is 44.40');
            });
            it('Should return the correct otput (test Soda)', () => {
                expect(movieTheater.moneySpent(4, [], ['Soda'])).equal('The total cost for the purchase with applied discount is 50.00');
            });
            it('Should return the correct otput (test Water)', () => {
                expect(movieTheater.moneySpent(4, [], ['Water'])).equal('The total cost for the purchase with applied discount is 49.20');
            });
            it('Should return the correct otput (test Soda && Water)', () => {
                expect(movieTheater.moneySpent(4, [], ['Soda', 'Water'])).equal('The total cost for the purchase with applied discount is 51.20');
            });
            it('Should return the correct otput (test Popcorn && Nachos and Soda && Water)', () => {
                expect(movieTheater.moneySpent(3, ['Popcorn', 'Nachos'], ['Soda', 'Water'])).equal('The total cost for the purchase with applied discount is 47.60');
            });
            it('Should return the correct otput (test with only food and drinks Popcorn && Nachos and Soda && Water)', () => {
                expect(movieTheater.moneySpent(0, ['Popcorn', 'Popcorn', 'Popcorn', 'Popcorn', 'Nachos', 'Nachos', 'Nachos', 'Nachos', 'Nachos', 'Nachos'], ['Soda', 'Soda', 'Water'])).equal('The total cost for the purchase with applied discount is 48.40');
            });
        });
    });

    describe("reservation", () => {
        it('Should throw error if invalid inputs', () => {
            expect(() => movieTheater.reservation('a', 1)).to.throw(Error, 'Invalid input');
            expect(() => movieTheater.reservation([], 'a')).to.throw(Error, 'Invalid input');
        });

        it('Should return the correct otput (no food and drinks )', () => {
            const rowsWithSeats = [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }];
            expect(movieTheater.reservation(rowsWithSeats, 6)).equal(1);
        });
        it('Should return the correct otput (no food and drinks )', () => {
            const rowsWithSeats = [{ rowNumber: 1, freeSeats: 5 }, { rowNumber: 2, freeSeats: 7 }];
            expect(movieTheater.reservation(rowsWithSeats, 6)).equal(2);
        });
    });
});
