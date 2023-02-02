const { expect } = require("chai");
const isOddOrEven = require('../02-evenOrOdd');

describe('Odd or Even', ()=> {

    it('When given non string should return undefind', ()=> {
        expect(isOddOrEven(1)).to.equal(undefined);
        expect(isOddOrEven([])).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
        expect(isOddOrEven(true)).to.equal(undefined);
        expect(isOddOrEven(false)).to.equal(undefined);
        expect(isOddOrEven(()=>{})).to.equal(undefined);
    })

    it('Should return even when the input is even string', ()=> {
        const expectedOutput = 'even';

        const actualOutput = isOddOrEven('test');

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('Should return odd when the input is odd string', ()=> {
        const expectedOutput = 'odd';

        const actualOutput = isOddOrEven('test1');

        expect(actualOutput).to.equal(expectedOutput);
    })

    it('Test with multiple inputs, should return the correct odd or even', ()=> {

        expect(isOddOrEven('Hi')).to.equal('even');
        expect(isOddOrEven('')).to.equal('even');
        expect(isOddOrEven('JavaScript')).to.equal('even');
        expect(isOddOrEven('Hello World')).to.equal('odd');
        expect(isOddOrEven('H')).to.equal('odd');
        expect(isOddOrEven('123')).to.equal('odd');
    })
});