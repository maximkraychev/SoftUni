function orbit(arr) {

    const width = arr[0];
    const height = arr[1];
    const x = arr[2];
    const y = arr[3];
    const matrix = [];

    for (let i = 0; i < height; i++) {
        matrix[i] = [];
        for (let j = 0; j < width; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    console.log(matrix.map(x => x.join(' ')).join('\n'));
}


//orbit([4, 4, 0, 0]);

//orbit([5, 5, 2, 2]);

orbit([3, 3, 2, 2]);