function equalSums(array) {

    let arrayLength = array.length;
    let isThereSuchNumber = false;

    for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let y = 0; y < arrayLength; y++) {
            if (y < currentIndex) {
                leftSum += array[y];
            } else if (y > currentIndex) {
                rightSum += array[y];
            }
        }

        if (leftSum === rightSum) {
            console.log(currentIndex);
            isThereSuchNumber = true
        }
    }

    if (isThereSuchNumber === false) {
        console.log('no');
    }

}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);