function caesarCipher(string) {
    let finalString = ''
    for (let i=0; i<string.length; i++) {
        if (isLetter(string.charAt(i))) {
            finalString += returnShiftedLetter(string.charAt(i));
        } else {
            finalString += string.charAt(i);
        }
    }
    return finalString;
}

function isLetter(letter) {
    return (/[a-zA-Z]/).test(letter);
}

function returnShiftedLetter(letter) {
    let letterCharCode = letter.charCodeAt(0);
    if (letter === 'z') {
        return 'a';
    } else if (letter === 'Z') {
        return 'A';
    }
    return String.fromCharCode(letterCharCode+1);
}

module.exports = caesarCipher;