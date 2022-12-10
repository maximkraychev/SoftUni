/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {

    let arrIdexOfAllLetters = new Array(26).fill(false);

    for (let index = 0; index < string.length; index++) {
        let currentLetter = string[index].toLowerCase().charCodeAt();

        if (currentLetter >= 97 && currentLetter <= 122) {
            let letterIndex = currentLetter - 97;
            arrIdexOfAllLetters[letterIndex] = true;
        }
    }

    if (arrIdexOfAllLetters.includes(false)) {
        return false;
    } else {
        return true;
    }
}

isPangram("The quick brown fox jumps over the lazy dog");
isPangram("The quick brown fox jumps over the ")