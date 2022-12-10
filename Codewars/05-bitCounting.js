/*

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

function bitCounting(n) {

    const bitsEqualToOne = n.toString(2).split('').filter(x => x === '1' ? x : null).length
    return bitsEqualToOne
}

bitCounting(1234)

/* Best Solution in codewars

countBits = n => n.toString(2).split('0').join('').length;

*/