function memoryGame(input) {

    let sequenceArr = input.shift().split(' ');
    let rowsWithIndexs = input.shift();
    let moves = 0;

    while (rowsWithIndexs !== 'end') {
        moves++
        let rowsWithIndexsIntoArr = rowsWithIndexs.split(' ').map(x => Number(x));
        let [indexOne, indexTwo] = rowsWithIndexsIntoArr;
        let sequenceArrLength = sequenceArr.length;

        if ((indexOne < 0 || indexOne > sequenceArrLength - 1) || (indexTwo < 0 || indexTwo > sequenceArrLength - 1) || indexOne === indexTwo) {
            sequenceArr.splice(sequenceArrLength / 2, 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");

        } else if (sequenceArr[indexOne] === sequenceArr[indexTwo]) {
            let matchingElements = sequenceArr[indexOne];
            let firstOneToDelete = Math.min(indexOne, indexTwo)
            let secondOneToDelete = Math.max(indexOne, indexTwo)
            sequenceArr.splice(firstOneToDelete, 1);
            sequenceArr.splice(secondOneToDelete - 1, 1);
            console.log(`Congrats! You have found matching elements - ${matchingElements}!`);

        } else if (sequenceArr[indexOne] !== sequenceArr[indexTwo]) {
            console.log("Try again!");
        }

        if (sequenceArr.length < 1) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }

        rowsWithIndexs = input.shift();
    }

    if (sequenceArr.length > 1) {
        console.log(`Sorry you lose :(\n${sequenceArr.join(' ')}`);
    }

}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "10 0",
    "end"
    ]
);

// memoryGame([
//     "a 2 4 a 2 4",
//     "0 3",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
//     ]
//     )

    // memoryGame([
    //     "a 2 4 a 2 4", 
    //     "4 0", 
    //     "0 2",
    //     "0 1",
    //     "0 1", 
    //     "end"
    //     ]
    //     )