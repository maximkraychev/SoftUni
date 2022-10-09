function palindromeIntegers(array) {

    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {

        let isPalindrome = false;
        let currentNumberToString = array[i].toString();
        let currentNumberToStringLength = currentNumberToString.length;

        for (let j = 0; j < currentNumberToStringLength; j++) {

            if (currentNumberToString[j] === currentNumberToString[currentNumberToStringLength - 1 - j]) {
                isPalindrome = true;
            } else {
                isPalindrome = false;
                break;
            }
        }

        if (isPalindrome) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);