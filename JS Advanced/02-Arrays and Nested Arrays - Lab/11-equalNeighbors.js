/*
Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as an array of arrays, containing string elements (2D matrix of strings).
The output is the return value of your function. Save the number of equal pairs you find and return it.
*/

function equalNeighbors(matrix) {

    let equalPair = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (j <= matrix[i].length - 2) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    equalPair += 1;
                }
            }

            if (i <= matrix.length - 2) {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    equalPair += 1;
                }
            }
        }
    }

    return equalPair;
}


equalNeighbors([
    ['2', '3', '4', '7', '0'],                      // Expected return value: 1
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);

equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],                    // Expected return value: 2
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);

equalNeighbors([                                    // Expected return value: 3
    ['test', 'yo', 'yo', 'undefined'],
    ['well', 'done', 'yo', '6'],
    ['undefined', 'done', 'yet', '5']]
);