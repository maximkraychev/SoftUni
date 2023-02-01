const expect = require('chai').expect;
const createCalculator = require('../07-addSubtract');

describe('Create Claculator', () => {
    it('Should return object', () => {
        const expectedOutput = 'object';

        const actualOutput = createCalculator()

        expect(typeof actualOutput).to.equal(expectedOutput);
    });

    it('Should return object that have add, substract and get methods', () => {

        const actualOutput = createCalculator()

        expect(actualOutput).to.have.property('add');
        expect(typeof actualOutput.add).to.be.equals('function');
        expect(actualOutput).to.have.property('subtract');
        expect(typeof actualOutput.subtract).to.be.equals('function');
        expect(actualOutput).to.have.property('get');
        expect(typeof actualOutput.get).to.be.equals('function');
    });

    it('Method get should return the internal varible sum', () => {
        const expectedOutput = 0;

        const actualOutput = createCalculator().get();

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Method add should modify the internal varible sum', () => {
        const expectedOutput = 11;

        const obj = createCalculator();
        obj.add(11);
        const actualOutput = obj.get();

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Method subtract should modify the internal varible sum', () => {
        const expectedOutput = -11;

        const obj = createCalculator();
        obj.subtract(11);
        const actualOutput = obj.get();

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Method add should work poroperly with number as string', () => {
        const expectedOutput = 11;

        const obj = createCalculator();
        obj.add('11');
        const actualOutput = obj.get();

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Method subtract should work poroperly with number as string', () => {
        const expectedOutput = -11;

        const obj = createCalculator();
        obj.subtract('11');
        const actualOutput = obj.get();

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Internal sum should be NaN if we try to modify it with method add with arguments difrent from number and number as string', () => {
        const arr = ['asd', undefined, {}, function () { }, NaN];

        for (const type of arr) {
            const obj = createCalculator();
            obj.add(type);

            let actualOutput = obj.get();
            expect(actualOutput).to.be.NaN;
        }

        let obj = createCalculator();
        obj.add([]);
        let actualOutput = obj.get();
        expect(actualOutput).to.equal(0);

        obj = createCalculator();
        obj.add(false);
        actualOutput = obj.get();
        expect(actualOutput).to.equal(0);

        obj = createCalculator();
        obj.add(true);
        actualOutput = obj.get();
        expect(actualOutput).to.equal(1);
    });

    it('Internal sum should be NaN if we try to modify it with method subtract with arguments difrent from number and number as string', () => {
        const arr = ['asd', undefined, {}, function () { }, NaN];

        for (const type of arr) {
            const obj = createCalculator();
            obj.subtract(type);

            let actualOutput = obj.get();
            expect(actualOutput).to.be.NaN;
        }

        let obj = createCalculator();
        obj.subtract([]);
        let actualOutput = obj.get();
        expect(actualOutput).to.equal(0);

        obj = createCalculator();
        obj.subtract(false);
        actualOutput = obj.get();
        expect(actualOutput).to.equal(0);

        obj = createCalculator();
        obj.subtract(true);
        actualOutput = obj.get();
        expect(actualOutput).to.equal(-1);
    });
})