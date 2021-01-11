



const test = 'he(i/j)llo w(i/j)orld';
const test2 = '((()(([(i/j)]';

function polybius(input, encode = true) {
    if (!input || input.split(' ').join('').length % 2 !== 0 ) return false;
  let result = null;
  input = input.toLowerCase();
  input = input.split('(i/j)').join('~');
  
  if(encode) {
    result = translateToNums(input);
  } else {
    result = translateToChars(input);
  }

  return result;
}

function translateToNums(input) {
  const charsToNums = {
    'a': '11',
    'b': '21',
    'c': '31',
    'd': '41',
    'e': '51',
    'f': '12',
    'g': '22',
    'h': '32',
    'i': '42',
    'j': '42',
    'k': '52',
    'l': '13',
    'm': '23',
    'n': '33',
    'o': '43',
    'p': '53',
    'q': '14',
    'r': '24',
    's': '34',
    't': '44',
    'u': '54',
    'v': '15',
    'w': '25',
    'x': '35',
    'y': '45',
    'z': '55',
    '~': '42'
  };

  let stringBuilder = '';

  for(let i = 0; i < input.length; i++) {
    const char = input[i];

    if(charsToNums[char]) {
      stringBuilder += charsToNums[char];
    } else if(char === ' ') {
      stringBuilder += ' ';
    }
  }

  return stringBuilder;
}

function translateToChars(input) {
  const numsToChars = {
    '42': '(i/j)',
    '11': 'a',
    '21': 'b',
    '31': 'c',
    '41': 'd',
    '51': 'e',
    '12': 'f',
    '22': 'g',
    '32': 'h',
    '52': 'k',
    '13': 'l',
    '23': 'm',
    '33': 'n',
    '43': 'o',
    '53': 'p',
    '14': 'q',
    '24': 'r',
    '34': 's',
    '44': 't',
    '54': 'u',
    '15': 'v',
    '25': 'w',
    '35': 'x',
    '45': 'y',
    '55': 'z'
  };
  let stringBuilder = '';

  for(let i = 0; i < input.length; i++) {
    const char = input[i];

    if(char === ' ') {
      stringBuilder += ' ';
    } else if (parseInt(char) < 6) {
      const col = input[i];
      const row = input[i+1];
      const colRow = col + row; // '32'

      stringBuilder += numsToChars[colRow];
      i += 1;
    }
  }

  return stringBuilder;
}



// '325142131314 14421341'

module.exports = polybius;
















