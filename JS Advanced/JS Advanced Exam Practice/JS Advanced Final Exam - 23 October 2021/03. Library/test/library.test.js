const { expect } = require("chai");
const { library } = require('../library');

describe('Library', function () {
    describe('calcPriceOfBook', ()=> {
        it('Should throw error if the input is invalid', ()=> {
            expect(()=> library.calcPriceOfBook(1,1)).to.throw(Error,'Invalid input');
            expect(()=> library.calcPriceOfBook('a',1.1)).to.throw(Error,'Invalid input');
        });

        it('Should return the final string but with 50% discount', ()=> {
            expect(library.calcPriceOfBook('a', 1980)).to.equal('Price of a is 10.00');
        });

        it('Should return the final string', ()=> {
            expect(library.calcPriceOfBook('a', 1981)).to.equal('Price of a is 20.00');
        });
    });
    describe('findBook', ()=> {
        it('Should throw error if the booksArr length is 0', ()=> {
            expect(() => library.findBook([], 'a')).to.throw(Error, 'No books currently available');
        });
        it('Should return the string if the book is not in the array', ()=> {
            expect(library.findBook(['a', 'b'], 'c')).to.equal('The book you are looking for is not here!');
        });
        it('Should return the string if the book is in the array', ()=> {
            expect(library.findBook(['a', 'b'], 'a')).to.equal('We found the book you want.');
        });
    });
    describe('arrangeTheBooks', ()=> {
        it('Should throw error if the input is not an intager', ()=> {
            expect(()=> library.arrangeTheBooks(1.1)).to.throw(Error,'Invalid input');
        });
        it('Should throw error if the input is negative intager', ()=> {
            expect(()=> library.arrangeTheBooks(-1)).to.throw(Error,'Invalid input');
        });
        it('Should return the string if input countBook is less or equal to 40', ()=> {
            expect(library.arrangeTheBooks(1)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('Should return the string if input countBook is more then 40', ()=> {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});
