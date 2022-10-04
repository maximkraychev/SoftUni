function commonElements(arrOne, arrTwo) {

    let arrOneLength = arrOne.length;
    let arrTwoLength = arrTwo.length;

    for (let i = 0; i < arrOneLength; i++) {
        for (let y = 0; y < arrTwoLength; y++) {
            if (arrOne[i] === arrTwo[y]) {
                console.log(arrOne[i]);
            }
        }
    }

}

commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);