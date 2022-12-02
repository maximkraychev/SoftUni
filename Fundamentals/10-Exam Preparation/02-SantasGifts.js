function SantasGifts(input) {

    const numberOfCommands = Number(input.shift());

    let houses = input.shift().split(' ').map(x => Number(x));
    let currentPosition = 0;

    for (let index = 0; index < numberOfCommands; index++) {
        let [command, ...value] = input[index].split(' ');

        switch (command) {
            case 'Forward':
                const numberOfStepsForward = Number(value[0]);
                if (currentPosition + numberOfStepsForward < houses.length) {
                    currentPosition += numberOfStepsForward;
                    houses.splice(currentPosition, 1);
                }
                break;

            case 'Back':
                const numberOfStepsBack = Number(value[0]);
                if (currentPosition - numberOfStepsBack >= 0) {
                    currentPosition -= numberOfStepsBack;
                    houses.splice(currentPosition, 1);
                }
                break;

            case 'Gift':
                const index = Number(value[0]);
                const houseNumber = Number(value[1]);
                if (index >= 0 && index < houses.length) {
                    houses.splice(index, 0, houseNumber);
                    currentPosition = index;
                }
                break;

            case 'Swap':
                const numberOne = Number(value[0]);
                const numberTwo = Number(value[1]);
                const indexOfNumberOne = houses.indexOf(numberOne);
                const indexOfNumbertwo = houses.indexOf(numberTwo);

                if (indexOfNumberOne >= 0 && indexOfNumbertwo >= 0) {
                    houses[indexOfNumberOne] = numberTwo;
                    houses[indexOfNumbertwo] = numberOne;
                }
                break;
        }
    }

    console.log(`Position: ${currentPosition}`);
    console.log(houses.join(', '));
}

SantasGifts(['5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3',]
);  