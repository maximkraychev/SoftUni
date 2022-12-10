/*

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function splitStrings(string) {

    const regExp = /[[A-Za-z]{1,2}]*/g;

    let arrayWithPairs = string.match(regExp);
    if (arrayWithPairs === null) {
        return [];
    }

    let lastElement = arrayWithPairs.length - 1;

    if (arrayWithPairs[lastElement].length % 2 !== 0) {
        arrayWithPairs[lastElement] = arrayWithPairs[lastElement] + '_';
    }

    return arrayWithPairs;
}

splitStrings('abc')
splitStrings('ab')