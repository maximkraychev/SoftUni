function spiralMatrix(row, colum) {

    // Creating the matrix
    let matrix =[];

    for(let i = 0; i < colum; i++) {

        matrix[i] = [];

        for(let j = 0; j < row; j++) {
            matrix[i][j] = 1     
        }
    }

    // Filling the matrix spiral starting from digit 1 
    let count = 1;

    let left = 0;
    let top = 0;
    let right = row - 1;
    let bottom = colum - 1;
    let direction = 'rigth';
    
    while(left <= right && top <= bottom) {

        if(direction === 'rigth') {
            for (let i = left; i <= right; i++) {
                matrix[top][i] = count;
                count++
            }
            top++;
            direction = 'down';

        } else if (direction === 'down') {
            for (let i = top; i <= bottom; i++) {
                matrix[i][right] = count;
                count++
            }
            right--;
            direction = 'left';

        } else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = count;
                count++
            }
            bottom--
            direction = 'up'

        } else if (direction === 'up') {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = count;
                count++
            }
            left++;
            direction = 'rigth'
        }
    }

    // Printing every array on new row
    for(array of matrix) {
        console.log(array.join(' '));
    }  
}

spiralMatrix(5, 5)