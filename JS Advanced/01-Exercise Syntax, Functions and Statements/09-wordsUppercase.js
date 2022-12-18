/* 
Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string.
*/

function wordsUppercase(string) {

    const arrWithAllUpperCaseWords = [];

    const regExp = /\w+/gm;
    // If there is no match in the input string => the output on the console will be 'NO MATCH FOUND';
    const matches = string.match(regExp) || ['no match found'];

    matches.forEach(match => {
        arrWithAllUpperCaseWords.push(match.toUpperCase());
    })
    console.log(arrWithAllUpperCaseWords.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('')