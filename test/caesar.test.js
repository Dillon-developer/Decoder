// Write your tests here!

const expect = require('chai').expect;
const caesar = require('../src/caesar.js');

describe('caesar', () => {
    it('Should return false if shift is undefined, zero, less than -25, or greater than 25.', () => {
        const actualFalseOne =  caesar("thinkful");
        const actualFalseTwo =  caesar("thinkful", 99);
        const actualFalseThree =  caesar("thinkful", -26);
        expect(actualFalseOne && actualFalseTwo && actualFalseThree).to.be.false;
    });

    it('Should maintain spaces throughout, as should other non-alphabetic symbols', () => {
        const input = caesar("This is a secret message!", 8);
        const encode = 'bpqa qa i amkzmb umaaiom!';
        const inputTwo = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const decode = 'this is a secret message!';
        expect(input).to.eql(encode) && expect(inputTwo).to.eql(decode);
    });

    it('Should ignore capitol letters', () => {
        const inputLowerCase = caesar('thinkful', 3);
        const inputUpperCase = caesar('THINKFUL', 3);
        const output = 'wklqnixo';
        expect(inputLowerCase && inputUpperCase).to.eql(output);
    });

    it('If a letter is shifted so that it goes "off" the alphabet (example: a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet.', () => {
        const inputLetterOne = caesar('z', 5);
        const outputOne = 'e';
        const inputLetterTwo = caesar('a', -5);
        const outputTwo = 'v';
        expect(inputLetterOne).to.eql(outputOne) && expect(inputLetterTwo).to.eql(outputTwo);
    });
}) 

//abcdefghijklmnopqrstuvwxyz