function magicMatrices(matrix) {

    let check = 0
    matrix[0].map(x => check += x);

    isItMagical = true;
    let length = matrix.length

    for (let i = 0; i < length; i++) {
        let row = 0;
        let colum = 0

        for (let j = 0; j < length; j++) {
            row += matrix[i][j];
            colum += matrix[j][i];
        }

        if (row !== check || colum !== check) {
            isItMagical = false;
            break;
        }
    }

    console.log(isItMagical);
}

// magicMatrices([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]
// );

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )