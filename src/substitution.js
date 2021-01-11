//const regularAlphabet = "abcdefghijklmnopqrstuvwxyz"

function substitution(input, alphabet, encode = true) {
    //Make sure all inputs are converted to lower case letters
    input = input.toLowerCase()
    //Check for alphabet length, if alphabet input exists, and if there was an input to begin with
    if (alphabet.length !== 26 || !alphabet || !input ) return false; 

    const alphabetCharCode = (char) => (char.charCodeAt(0)) - 'z'.charCodeAt(0) + 26;
    

     // Checks for duplicate letters in the alphabet that is passed in. 
     const checkForDuplicatesArr = [];
     for (const letter of alphabet) {
         if (checkForDuplicatesArr.indexOf(letter) < 0) {
            checkForDuplicatesArr.push(letter);
         } else {
             return false;
         }
     }

    let outputString = '';
    const inputArr = input.split(''); // create an array with our input
    if (encode) { 
        for (let i = 0; i < input.length; i++) { 
            console.log(input[i])
            if(input[i].charCodeAt(0) >= 'a'.charCodeAt(0) && input[i].charCodeAt(0) <= 'z'.charCodeAt(0) || input[i].charCodeAt(0) === ' '.charCodeAt(0) )
                alphabetCharCode(inputArr[i]) === alphabetCharCode(' ') ? outputString += ' ' : outputString += alphabet[alphabetCharCode(inputArr[i]) - 1];
        }
    } else {
        const alphabetArray = alphabet.split('')
        for (let i = 0; i < input.length; i++) { // retrieve a letter based on index position 
            let indexPosition = 0;
            for (let letter in alphabetArray) {
                if (alphabetArray[letter] === inputArr[i]){
                    indexPosition = letter;
                    indexPosition++; // get the position number for the letter
                }
            }
            alphabetCharCode(inputArr[i]) === alphabetCharCode(' ') ? outputString += ' ' : outputString += String.fromCharCode(indexPosition + 'a'.charCodeAt(0) - 1)
        }
    }
    return outputString;
}

module.exports = substitution;
