function lettersChangeNumbers(input) {

    let cases = input
        .split(' ')
        .filter(x => x !== ' ' ? x : null)

    let sum = 0;

    for (let el of cases) {
        let arrayOfEl = el.split('');
        const beforeNumber = arrayOfEl.shift().charCodeAt();
        const afterNumber = arrayOfEl.pop().charCodeAt();
        let number = Number(arrayOfEl.join(''))
        number = calculateNumberBefore(beforeNumber, number);
        number = calculateNumberAfter(afterNumber, number)
        sum += number
    }

    console.log(sum.toFixed(2));

    // Functions >>> 

    function calculateNumberBefore(numLetter, numTocalculate) {
        let numberInAlphabet = Number()

        if (numLetter >= 65 && numLetter <= 90) {
            numberInAlphabet = numLetter - 64
            numTocalculate /= numberInAlphabet;
        } else if (numLetter >= 97 && numLetter <= 122) {
            numberInAlphabet = numLetter - 96
            numTocalculate *= numberInAlphabet;

        }
        return numTocalculate
    }

    function calculateNumberAfter(numLetter, numTocalculate) {
        let numberInAlphabet = Number()

        if (numLetter >= 65 && numLetter <= 90) {
            numberInAlphabet = numLetter - 64
            numTocalculate -= numberInAlphabet;
        } else if (numLetter >= 97 && numLetter <= 122) {
            numberInAlphabet = numLetter - 96
            numTocalculate += numberInAlphabet;
        }
        return numTocalculate
    }
}

lettersChangeNumbers('A12b s17G');

lettersChangeNumbers('P34562Z q2576f   H456z')

lettersChangeNumbers('a1A')