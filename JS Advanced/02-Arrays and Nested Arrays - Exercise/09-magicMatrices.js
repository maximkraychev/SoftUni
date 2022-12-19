/*
Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or not.
*/

function magicMatrices(arr) {

    // More functional:
    const arrSumOfRows = arr.map((x) => x.reduce((acc, curr) => acc + curr));
    const arrSumOfCol = arr.reduce((acc, curr) => acc.map((el, i) => el + curr[i]));
    const allCombined = arrSumOfRows.concat(arrSumOfCol);

    return allCombined.every((el) => el === allCombined[0]);

    // With nested loops:

    const numberToTestWith = arr[0].reduce((acc, curr) => acc + curr);

    for (let i = 0; i < arr.length; i++) {
        let rowSum = 0;
        let colSum = 0;

        for (let j = 0; j < arr.length; j++) {
            rowSum += arr[i][j];
            colSum += arr[j][i];
        }

        if (rowSum !== numberToTestWith || colSum !== numberToTestWith) {
            return false;
        }
    }

    return true;
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)
