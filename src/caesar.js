function caesar(input, shift, encode = true) {
    let output = '';
    input = input.toLowerCase()

    if (shift > 25 || shift < -25 || !shift) return false;
    if (!input.length) return '';

    if (!encode) shift *= -1;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// creates alphabet array containing every letter
    
    for (let indexPosition in input) {
        let shifter = alphabet.findIndex(letter => letter === input[indexPosition]) + shift;
        if (shifter > 25) { //back to A
            shifter -= 26;
        } else if (shifter < 0) { //back to Z
            shifter += 26; 
        }
        switch (input[indexPosition]) { //switch was used to add special characters
            case ' ':
                output += ' ';
                break;
            case '!':
                output += '!';
                break;
            case '.':
                output += '.';
                break;
            case ',':
                output += ',';
                break;
            case '?':
                output += '?';
                break;
            default:
                output += alphabet[shifter];
                break;

        }

    }
    return output;
}






module.exports = caesar;
