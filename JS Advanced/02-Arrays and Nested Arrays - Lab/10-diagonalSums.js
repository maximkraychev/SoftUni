/*

A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a function that finds the sum at the main and the secondary diagonals.
The input comes as an array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.

*/

function diagonalSums(squareMatrix) {

    let sumOfTheFirstDiagonal = 0;
    let sumOfTheSecondDiagonal = 0;

    for (let i = 0; i < squareMatrix.length; i++) {
        
        sumOfTheFirstDiagonal += squareMatrix[i][i];
        sumOfTheSecondDiagonal += squareMatrix[i][squareMatrix.length - 1 - i];
    }

    console.log(sumOfTheFirstDiagonal + ' ' + sumOfTheSecondDiagonal);
}

diagonalSums([              // Expected output: 80 50
    [20, 40],
    [10, 60]]
);

diagonalSums([              // Expected output: 99 25
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)