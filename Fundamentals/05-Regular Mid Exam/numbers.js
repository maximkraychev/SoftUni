function numbers(input) {

    let sequenceArr = input.shift().split(' ').map(x => Number(x));

    let currentRow = input.shift();

    while (currentRow !== 'Finish') {

        let currentRowAsArray = currentRow.split(' ');
        let command = currentRowAsArray[0];
        let value = Number(currentRowAsArray[1]);
        let replacement = Number(currentRowAsArray[2]);

        switch (command) {

            case 'Add':
                sequenceArr.push(value);
                break;

            case 'Remove':
                if (sequenceArr.includes(value)) {
                    let indexToRemove = sequenceArr.indexOf(value);
                    sequenceArr.splice(indexToRemove, 1);
                }
                break;

            case 'Replace':
                if (sequenceArr.includes(value)) {
                    let indexToReplace = sequenceArr.indexOf(value);
                    sequenceArr.splice(indexToReplace, 1, replacement);
                }
                break;

            case 'Collapse':
                sequenceArr = sequenceArr.filter(element => {
                    if (element >= value) {
                        return element;
                    }
                })
                break;
        }

        currentRow = input.shift();
    }

    console.log(sequenceArr.join(' '));
}

numbers(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])

    numbers(["1 20 -1 10",
    "Collapse 8",
    "Finish"])

numbers (["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])
   
