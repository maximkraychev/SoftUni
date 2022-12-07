function ladybugs(input) {

    let fieldArray = [];
    let fieldSize = Number(input.shift())

    // Making the field
    for (let i = 0; i < fieldSize; i++) {
        fieldArray.push(0)
    }

    let initialIndexesOfLadybugs = input.shift().split(' ').map(x => Number(x));

    //Placing the bugs on the given index 
    for (let currentIndex of initialIndexesOfLadybugs) {

        if (currentIndex >= 0 && currentIndex < fieldArray.length) {
            fieldArray[currentIndex] = 1;
        }
    }

    while (input.length > 0) {

        let commands = input.shift().split(' ');
        let ladybugIndex = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2])

        // First checking if on the given start position there is a bug
        if (fieldArray[ladybugIndex] === 1) {
            fieldArray[ladybugIndex] = 0;

            if (direction === 'right') {

                // Checking if after the flight the position is out of the fieldArray
                if (ladybugIndex + flyLength < fieldArray.length) {
                    
                    let length = fieldArray.length
                    let startindex = ladybugIndex + flyLength
                    let countRigth = 0

                    // if on the position where we should land there is another bug chek on the next index until end of the fieldArray
                    // if there isn't another bug land there = 1
                    for (let index = startindex; index < length; index++) {
                        
                        if (fieldArray[startindex + countRigth] === 0) {
                            fieldArray[startindex + countRigth] = 1
                            break;
                        }
                        countRigth++;
                    }
                }
            }
            if (direction === 'left') {

                // Checking if after the flight the position is out of the fieldArray
                if (ladybugIndex - flyLength >= 0) {

                    // if on the position where we should land there is another bug chek on the previous index(since we are going left) until end of the fieldArray
                    // if there isn't another bug land there = 1
                    let countLeft = 0
                    for (let index = ladybugIndex - flyLength; index >= 0; index--) {
                        if (fieldArray[ladybugIndex - flyLength - countLeft] === 0) {
                            fieldArray[ladybugIndex - flyLength - countLeft] = 1
                            break;
                        }
                        countLeft++
                    }
                }
            }
        }
    }
    console.log(fieldArray.join(' '));
}

// ladybugs([3, '0 1', '0 right 1', '2 right 1'])

ladybugs([ 10, '5 4',
'10 left 2',
// '6 right 4',
// '2 right 1'
])

// ladybugs([ 5, '3',
// '3 left 2',
// '1 left -2']
// )

//ladybugs([0, '0 1', '-1 right 1', '0 right 1', '2 right 1', '1 right 5'])