/*
Write a JS function that generates a Spirally-filled matrix with numbers, with given dimensions.
The input comes as 2 numbers that represent the dimension of the matrix. 
The output is the matrix filled spirally starting from 1. You need to print every row on a new line, with the cells separated by a space. Check the examples below. 
*/

function spiralMatrix(width, height) {

    // Creating the matrix;
    const matrix = new Array(width).fill().map(() => Array(height).fill('_'));

    let top = 0;
    let right = width - 1;
    let bottom = height - 1;
    let left = 0;
    let count = 1;
    let direction = 'Right';

    // Spirally filling the matrix with numbers 
    while (top <= bottom && left <= right) {

        // We go right and fill with numbers until we reach the end (right value);
        // We are done with the top row, so we squeeze the matrix (top is increased by 1);
        // And we start going down so direction is changed to 'Down';
        if (direction === 'Right') {
            for (let i = left; i <= right; i++) {
                matrix[top][i] = count++;
            }
            top++;
            direction = 'Down';
        }

        // We are going Down and fill with numbers until we reach the end (bottom value);
        // The rigth most colum is done and we squeeze again the matrix (right is decreased by 1);
        // Start going left and diection is changed to 'Left; 
        if (direction === 'Down') {
            for (let i = top; i <= bottom; i++) {
                matrix[i][right] = count++;
            }
            right--;
            direction = 'Left';
        }

        // We are going left until we reach the end (left value);
        // Done with the bottam row and squeeze again the matrix (bottom is decreased by 1);
        // We are going Up so (direction = 'UP');
        if (direction === 'Left') {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = count++;
            }
            bottom--;
            direction = 'Up';
        }

        // We are going up until we reach the end (top value);
        // After that we are done with left most colum and again squeeze the matrix (left is increased by 1);
        // Direction is changed to right, 
        if (direction === 'Up') {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = count++;
            }
            left++;
            direction = 'Right';
        }

        // Outer layer of the matrix is done and fild with the numbers;
        // Start again from the beginning until the while loop conditions are met;
    }

    // Print the matrix;
    console.log(matrix.map(x => x.join(' ')).join('\n'));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);