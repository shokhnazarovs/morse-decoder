const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let answer = [];
    let temp = '';
    expr = expr.match(/.{1,10}/g);

    for(let i=0; i<expr.length; i++){
        temp = expr[i];
        temp = temp.match(/.{1,2}/g);
        for(let j=0; j<temp.length; j++){
            if(temp[j] === '**'){
                answer.push(" ");
                break;
            }
            if(temp[j] === '00'){
                temp.shift();
                j--;
                continue;
            }
            if(temp[j] === '10'){
                temp[j] = '.';
                continue;
            }
            if(temp[j] === '11'){
                temp[j] = '-';
                continue;
            }
        }

        if(temp[0] != '**'){
            temp = temp.join('');
            answer.push(MORSE_TABLE[temp]);
        }
    }

    return answer.join('');
}

module.exports = {
    decode
}
