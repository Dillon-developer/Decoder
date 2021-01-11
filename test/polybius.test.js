// Write your tests here!

 const expect = require('chai').expect;
 const polybius = require('../src/polybius.js');

 describe("polybius", () => {
    it("Should encode input", () => {
        const expected = '4432423352125413';
        const actual = polybius('thinkful');
        expect(expected).to.equal(actual);
    });

    it("Should decode input", () => {
        const expected = 'hello world';
        const actual = polybius('3251131343 2543241341', false);
        expect(expected).to.equal(actual);
    });

    it("Should only include spaces and letters.", () => {
        const expected = '3251131343 2543241341 3251131343 2543241341';
        const actual = polybius('He!ll!o ??world#@ He!ll!o ??world#@');
        expect(expected).to.equal(actual);
    });

    it("Should change capital letters to lowercase", () => {
        const expected = '4432423352125413';
        const actual = polybius('THINKFUL');
        expect(expected).to.equal(actual);
    });
    
    it('Should convert both i and j to 42', ()=>{
        const expected = '4242';
        const actual = polybius('ij');
        expect(expected).to.equal(actual);
    });

    it("Should decode 42, both letters should share 42, i/j.", () => {
        const expected = 'th(i/j)nkful';
        const actual = polybius('4432423352125413', false);
        expect(expected).to.equal(actual);
    });

    it("Should decode the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
        const actual = polybius('44324233521254134', false);
        expect(actual).to.be.false;
    });

    it('Should return false if there is no input', () => {
        const actual = polybius("", false);
        expect(actual).to.be.false;
    });
})









