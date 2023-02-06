const { expect } = require("chai");
const PaymentPackage = require('../12-paymentPackage');

describe('Payment Package', function () {
    let classPayment = null;

    beforeEach(() => {
        classPayment = new PaymentPackage('abc', 123);
    })

    it('Constructor test', () => {
        expect(classPayment.name).to.equal('abc');
        expect(classPayment.value).to.equal(123);
        expect(classPayment.VAT).to.equal(20);
        expect(classPayment.active).to.equal(true);
    })

    describe('Constructor tests with incorrect input', () => {
        it('Should throw error when name is not a string or empty string', () => {
            const expected1 = () => { new PaymentPackage(123, 123) };
            const expected2 = () => { new PaymentPackage('', 123) };
            expect(expected1).to.throw(Error);
            expect(expected2).to.throw(Error);
        });

        it('Should throw error when value is not a number or is negative number', () => {
            const expected1 = () => { new PaymentPackage('abc', 'abc') };
            const expected2 = () => { new PaymentPackage('abc', -123) };
            expect(expected1).to.throw(Error);
            expect(expected2).to.throw(Error);
        });
    })

    describe('Constructor tests with correct input', () => {
        it('Should return correct value', () => {
            const expected = new PaymentPackage('abc', 0);
            expect(expected.value).to.equal(0);
            expect(expected.name).to.equal('abc');
        });

        it('Should return correct value', () => {
            const expected = new PaymentPackage('a', 1);
            expect(expected.value).to.equal(1);
            expect(expected.name).to.equal('a');
        });
    })

    describe('Get and Set tests', () => {

        it('Should be able to chnage correctly VAT with set accessor', () => {
            const expected1 = classPayment.VAT = 111;
            const expected2 = classPayment.VAT = 222;
            expect(expected1).to.equal(111);
            expect(expected2).to.equal(222);
        });

        it('Should throw error when VAT is not a number or is negative number', () => {
            const expected1 = () => { classPayment.VAT = 'abc' };
            const expected2 = () => { classPayment.VAT = -123 };
            expect(expected1).to.throw(Error);
            expect(expected2).to.throw(Error);
        });

        it('Should be able to chnage correctly acive with set accessor', () => {
            const expected1 = classPayment.active = false;
            expect(expected1).to.equal(false);
        });

        it('Should throw error when active is not a boolean', () => {
            const expected1 = () => { classPayment.active = 'abc' };
            expect(expected1).to.throw(Error);
        });
    })

    describe('toString method tests', () => {
        it('Should return string', () => {
            expect(classPayment.toString()).to.be.string;
        });

        it('Should return a string if all the input is correct', () => {
            const expected = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`,
            ];
            expect(classPayment.toString()).to.equal(expected.join('\n'));
        })

        it('Should return a string if all the input is correct(change VAT and active)', () => {
            classPayment.VAT = 40;
            classPayment.active = false;
            const expected = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 40%): 172.2`,
            ];
            expect(classPayment.toString()).to.equal(expected.join('\n'));
        })
    })
})
