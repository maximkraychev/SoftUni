const expect = require('chai').expect;
const isSymmetric = require('../05-checkForSymmetry.js');

describe('Is Symmetric', () => {
    it('Should return true when symmetric array is given', () => {
        const input = [1, 2, 2, 1];
        const expectedOutput = true;

        const actualOutput = isSymmetric(input);

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Should return true when empty array is given', () => {
        const input = [];
        const expectedOutput = true;

        const actualOutput = isSymmetric(input);

        expect(actualOutput).to.equal(expectedOutput);
    });
    
    it('Should return false when non-symmetric array is given', () => {
        const input = [1, 2, 1, 1];
        const expectedOutput = false;

        const actualOutput = isSymmetric(input);

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Should return false when non array is given', () => {
        
        const expectedOutput = false;

        expect(isSymmetric(50)).to.equal(expectedOutput);
        expect(isSymmetric({})).to.equal(expectedOutput);
        expect(isSymmetric('50')).to.equal(expectedOutput);
        expect(isSymmetric(false)).to.equal(expectedOutput);
        expect(isSymmetric(true)).to.equal(expectedOutput);
        expect(isSymmetric(null)).to.equal(expectedOutput);
        expect(isSymmetric(undefined)).to.equal(expectedOutput);
        expect(isSymmetric(() => {})).to.equal(expectedOutput);
    });

    it('Should return true when symmetric nasted array is given', () => {
        const input = [[1],[2],[1]];
        const expectedOutput = true;

        const actualOutput = isSymmetric(input);

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Should return false when non-symmetric nasted array is given', () => {
        const input = [[1],[2], [1], [1]];
        const expectedOutput = false;

        const actualOutput = isSymmetric(input);

        expect(actualOutput).to.equal(expectedOutput);
    });
})