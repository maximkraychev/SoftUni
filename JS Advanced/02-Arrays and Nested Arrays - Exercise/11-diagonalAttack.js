/*
Write a JS function that reads a given matrix of numbers and checks if both main diagonals have equal sums. If they do, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
The input comes as an array of strings. Each element represents a string of numbers, with spaces between them. Parse it into a matrix of numbers, so you can work with it.
The output is either the new matrix, with all cells not belonging to a main diagonal are changed to the diagonal sum, or the original matrix if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. Check the examples below. 
*/

function diagonalAttack(matrix) {

    matrix = matrix.map(x => x.split(' ').map(dig => Number(dig)));
    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;

    for (let index = 0; index < matrix.length; index++) {
        sumOfFirstDiagonal += matrix[index][index];
        sumOfSecondDiagonal += matrix[index][matrix.length - 1 - index];
    }

    if (sumOfFirstDiagonal === sumOfSecondDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {

                if (i === j || i === matrix.length - 1 - j) {
                    continue;
                }
                matrix[i][j] = sumOfFirstDiagonal;
            }
        }
    }

    matrix.forEach(arr => {
        console.log(arr.join(' '));
    })
}

// diagonalAttack([
//     '5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1'
// ]);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
)