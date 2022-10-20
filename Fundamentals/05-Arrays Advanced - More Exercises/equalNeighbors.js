function equalNeighbors(input) {

    let countForEqualNeighborPairs = 0;

    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {

        let currentArray = input[i];
        let nextArray = []

        if (i < inputLength - 1) {
            nextArray = input[i + 1];
        }

        for (let j = 0; j < currentArray.length; j++) {

            let currentElement = currentArray[j];
            let nextElement = currentArray[j + 1];
            let bottomElement = nextArray[j]

            if (currentElement === nextElement) {
                countForEqualNeighborPairs++;
            }

            if (currentElement === bottomElement) {
                countForEqualNeighborPairs++;
            }
        }
    }

    console.log(countForEqualNeighborPairs);
}

equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);

equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
)

equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]);