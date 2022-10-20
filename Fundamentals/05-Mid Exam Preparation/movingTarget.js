function movingTarget(input) {

    let targets = input.shift().split(' ').map(x => Number(x));
    let currentRow = input.shift();

    while (currentRow !== 'End') {
        let currentRowIntoArray = currentRow.split(' ');
        let command = currentRowIntoArray[0];
        let index = Number(currentRowIntoArray[1]);
        let number = Number(currentRowIntoArray[2]);

        switch (command) {

            case 'Shoot':
                if (index >= 0 && index < targets.length) {
                    targets[index] -= number;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;

            case 'Add':
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, number);
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case 'Strike':
                if (index - number >= 0 && index + number < targets.length) {
                    let startToRemove = index - number;
                    let endToRemove = number * 2 + 1;
                    targets.splice(startToRemove, endToRemove);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        currentRow = input.shift();
    }

    console.log(targets.join('|'));
}

movingTarget((["52 74 23 44 96 110",
"Strike 4 0",
"End"])
);

// movingTarget((["1 2 3 4 5",
//     "Strike 0 1",
//     "End"])
// )