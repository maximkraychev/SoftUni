/*
Write a function that finds the biggest element inside a matrix.
The input comes as an array of arrays, containing number elements (2D matrix of numbers).
The output is the return value of your function. Find the biggest element and return it.
Examples:

            Input	        Output		   //           Input	          Output
        [[20, 50, 10],          145        //      [[3, 5, 7, 12],         33
        [8, 33, 145]]                               [-1, 4, 33, 2],
                                                    [8, 3, 0, 4]]

*/

function biggestElement(matrix) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;
    findTheBiggest(matrix);

    return biggestNumber;

    function findTheBiggest(input) {
        for (let index = 0; index < input.length; index++) {

            if (typeof input[index] === 'object') {
                findTheBiggest(input[index]);

            } else {
                if (biggestNumber < input[index]) {
                    biggestNumber = input[index];
                }
            } 
        }
    }
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]]
)

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )

