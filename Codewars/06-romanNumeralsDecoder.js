/* 
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.


Example:

solution('XXI'); // should return 21
*/

function solution(roman) {

    const table = {
        I: {index: 0, value: 1},
        V: {index: 1, value: 5},
        X: {index: 2, value: 10},
        L: {index: 3, value: 50},
        C: {index: 4, value: 100},
        D: {index: 5, value: 500},
        M: {index: 6, value: 1000},
    }

    let sum = 0;
    const arr = roman.split('');
    
    for (let index = 0; index < arr.length; index++) {
        const cur = table[arr[index]];
        const next = table[arr[index + 1]];

        if (cur.index < next?.index) {
            sum += next.value - cur.value;
            index++;
        } else {
            sum += cur.value;
        }
    }

    return sum;
}

console.log(solution('MMMCMXXIII'));  // 3923
