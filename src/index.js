const MORSE_TABLE = {
  ' ': ' ',
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const decoded = {
  '11': '-',
  '10': '.',
  '**': ' ',
  '0': ''
};

function decode(expr) {
  let numArr = expr.match(/(.{10,10})/g).map(someNumber => {
    if (someNumber === '**********') {
      return ' ';
    } else {
      return someNumber.match(/(.{1,2})/g).map(digit => decoded[digit]).join('');
    }
  }).map(mask => MORSE_TABLE[mask]).join('');
  return numArr;
};

module.exports = {
  decode
};