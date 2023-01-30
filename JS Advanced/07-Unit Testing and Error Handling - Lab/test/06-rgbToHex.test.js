const expect = require('chai').expect;
const rgbToHexColor = require('../06-rgbToHex');

describe('RGB to Hex Color', ()=> {
    it('Should return correct Hex-a color with input numbeers in range 0-255', ()=> {
        const [red, green, blue] = [0, 111, 255];
        
        const expectedOutput = '#006FFF';
        const actualOutput = rgbToHexColor(red, green, blue);

        expect(actualOutput).to.equal(expectedOutput);
    });

    it('Should return undefind if the input numbeers are not in range 0-255', ()=> {

        expect(rgbToHexColor(-2, 111, 255)).to.equal(undefined);
        expect(rgbToHexColor(300, 111, 255)).to.equal(undefined);
        expect(rgbToHexColor(0, -30, 300)).to.equal(undefined);
        expect(rgbToHexColor(0, 422, 255)).to.equal(undefined);
        expect(rgbToHexColor(0, 111, -21)).to.equal(undefined);
        expect(rgbToHexColor(0, 111, 421)).to.equal(undefined);
    });

    it('Should return undefind if the inputs are not numbers', ()=> {

        expect(rgbToHexColor('111', 111, 111)).to.equal(undefined);
        expect(rgbToHexColor(false, 111, 111)).to.equal(undefined);
        expect(rgbToHexColor(true, 111, 111)).to.equal(undefined);
        expect(rgbToHexColor(null, 111, 111)).to.equal(undefined);
        expect(rgbToHexColor(undefined, 111, 111)).to.equal(undefined);
        expect(rgbToHexColor({}, 111, 111)).to.equal(undefined);
        expect(rgbToHexColor([], 111, 111)).to.equal(undefined);
        expect(rgbToHexColor(()=>{}, 111, 111)).to.equal(undefined);
        expect(rgbToHexColor(111, '111', 111)).to.equal(undefined);
        expect(rgbToHexColor(111, false, 111)).to.equal(undefined);
        expect(rgbToHexColor(111, true, 111)).to.equal(undefined);
        expect(rgbToHexColor(111, null, 111)).to.equal(undefined);
        expect(rgbToHexColor(111, undefined, 111)).to.equal(undefined);
        expect(rgbToHexColor(111, {}, 111)).to.equal(undefined);
        expect(rgbToHexColor(111, [], 111)).to.equal(undefined);
        expect(rgbToHexColor(111, ()=>{}, 111)).to.equal(undefined);
        expect(rgbToHexColor(111, 111, '111')).to.equal(undefined);
        expect(rgbToHexColor(111, 111, false)).to.equal(undefined);
        expect(rgbToHexColor(111, 111, true)).to.equal(undefined);
        expect(rgbToHexColor(111, 111, null)).to.equal(undefined);
        expect(rgbToHexColor(111, 111, undefined)).to.equal(undefined);
        expect(rgbToHexColor(111, 111, {})).to.equal(undefined);
        expect(rgbToHexColor(111, 111, [])).to.equal(undefined);
        expect(rgbToHexColor(111, 111, ()=>{})).to.equal(undefined);
    });
})