const { expect } = require("chai");
const lookupChar = require('../03-charLookup');

describe('LookUp Char', () => {
    it('Should return character at the specified index in the string', () => {
        const expectedOutput = 'o';
        const actualOutput = lookupChar('Hello World', 4);

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('Should return undefind if the first parameter is not a string', () => {
        const expectedOutput = undefined;
        const actualOutput = lookupChar(5, 4);

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('Should return undefind if the second parameter is not a number', () => {
        const expectedOutput = undefined;
        const actualOutput = lookupChar('Hello World', '4');

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('Should return undefind if the second parameter is floating point number', () => {
        const expectedOutput = undefined;
        const actualOutput = lookupChar('Hello World', 4.5);

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('Should return "Incorrect index" if the second parameter have the correct type but the index is incorrect', () => {
        expect(lookupChar('test', 25)).to.equal('Incorrect index');
        expect(lookupChar('test', 4)).to.equal('Incorrect index');
        expect(lookupChar('test', -3)).to.equal('Incorrect index');
    })

    it('More test for returning the correct result', () => {
        expect(lookupChar('JS', 1)).to.equal('S');
        expect(lookupChar('JavaScript', 4)).to.equal('S');
        expect(lookupChar('Hello', 4)).to.equal('o');
        expect(lookupChar('JS', 0)).to.equal('J');
    })
});