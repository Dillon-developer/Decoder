// Write your tests here!


const expect = require('chai').expect;
const substitution = require('../src/substitution.js');

describe('substitution', () => {
    it('Should maintain spaces throughout.', () => {
        const inputSpaces = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const outputSpaces = 'elp xhm xf mbymwwmfj dne'
        expect(inputSpaces).to.eql(outputSpaces)
    });

    it("Should only include spaces and letters.", () => {
        const inputStrange = substitution("t!hi!@#nk!ful?", "xoyqmcgrukswaflnthdjpzibev");
        const outputCorrected = 'jrufscpw';
        expect(inputStrange).to.equal(outputCorrected);
    });

    it('The alphabet parameter must be string of exactly 26 characters. Otherwise, it should return false.', () => {
        const inputCheck = substitution("too short", "shorty");
        expect(inputCheck).to.be.false;
    });

    it('Should return false if alphabet is missing', () => {
        const actual = substitution("xoyqmcgrukswaflnthdjpzibev", "");
        expect(actual).to.be.false;
    });

    it('All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.', () => {
        const inputUniqueOne = substitution("thinkful", "abcabcabcabcabcabcabcabyz");
        expect(inputUniqueOne).to.be.false;
    });

    it("Should have a complete alphabet passed in.", () => {
        const inputAlphabet = substitution("test", "abacadaeafagahaiajakalaman");
        expect(inputAlphabet).to.be.false;
    });

    it("Should return false if alphabet has special chars", () => {
        const inputAlphabet = substitution("test", "abacada!afagahaiajakalaman");
        expect(inputAlphabet).to.be.false;
    });
   

    it('Should return false if input is missing', () => {
        const actual = substitution("", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.false;
    });

    it('Should decode the input.', () => {
        const inputDecode = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const outputDecode = "thinkful"
        expect(inputDecode).to.eql(outputDecode);
    });
}) 

