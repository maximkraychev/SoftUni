function manoWar(input) {

    let pirateShip = input.shift().split('>').map(x => Number(x));
    let warship = input.shift().split('>').map(x => Number(x));
    let maxHealth = Number(input.shift());
    let currentRow = input.shift()
    let isStalemate = true;
    let isOneOfTheShipsSunken = false;

    while (currentRow !== 'Retire') {

        let currentRowAsArray = currentRow.split(' ');
        let command = currentRowAsArray[0];
        let digitOne = Number(currentRowAsArray[1])
        let digitTwo = Number(currentRowAsArray[2])
        let digitThree = Number(currentRowAsArray[3])
        let pirateShipLength = pirateShip.length;
        let warshipLength = warship.length;

        switch (command) {

            case 'Fire':

                let indexInFire = digitOne;
                let dmgInFire = digitTwo;

                if (indexInFire >= 0 && indexInFire < warshipLength) {
                    warship[indexInFire] -= dmgInFire;

                    if (warship[indexInFire] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        isOneOfTheShipsSunken = true;
                        isStalemate = false;
                    }
                }
                break;

            case 'Defend':
                let startIndex = digitOne;
                let endIndex = digitTwo;
                let damage = digitThree;

                if ((startIndex >= 0 && startIndex < pirateShipLength) && (endIndex >= 0 && endIndex < pirateShipLength)) {

                    for (startIndex; startIndex <= endIndex; startIndex++) {
                        pirateShip[startIndex] -= damage;

                        if (pirateShip[startIndex] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            isOneOfTheShipsSunken = true;
                            isStalemate = false;
                            break;
                        }
                    }
                }
                break;

            case 'Repair':
                let indexToRepair = digitOne;
                let health = digitTwo;

                if (indexToRepair >= 0 && indexToRepair < pirateShipLength) {

                    if (pirateShip[indexToRepair] + health > maxHealth) {
                        pirateShip[indexToRepair] = maxHealth;
                    } else {
                        pirateShip[indexToRepair] += health;
                    }
                }
                break;

            case 'Status':
                let minHealth = maxHealth * 0.20;
                let countOfTheSectionThatNeedRepair = 0;

                for (section of pirateShip) {

                    if (section < minHealth) {
                        countOfTheSectionThatNeedRepair++
                    }
                }
                console.log(`${countOfTheSectionThatNeedRepair} sections need repair.`);
                break;
        }

        if (isOneOfTheShipsSunken) {
            break;
        }

        currentRow = input.shift()
    }

    if (isStalemate) {

        let pirateShipStatus = 0
        let warshipStatus = 0
        pirateShip.map(section => pirateShipStatus += section);
        warship.map(section => warshipStatus += section);
        console.log(`Pirate ship status: ${pirateShipStatus}\nWarship status: ${warshipStatus}`);
    }
}

// manoWar(["12>13>11>20>66",
// "12>22>33>44>55>32>18",
// "70",
// "Fire 2 11",
//  "Fire 8 100",
// "Defend 3 6 11",
// "Defend 0 3 5",
// "Repair 1 33",
//  "Status",
// "Retire"]);

manoWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);
