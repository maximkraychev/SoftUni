function treasureHunt(input) {

    let treasureChestArr = input.shift().split('|');
    let currentRow = input.shift();

    while (currentRow !== 'Yohoho!') {

        let currentRowAsArray = currentRow.split(' ');
        let command = currentRowAsArray.shift();

        switch (command) {

            case 'Loot':
                let looteditems = currentRowAsArray;

                for (item of looteditems) {
                    if (!treasureChestArr.includes(item)) {
                        treasureChestArr.unshift(item);
                    }
                }
                break;

            case 'Drop':
                let indexOfItemToDrop = Number(currentRowAsArray.shift())

                if (indexOfItemToDrop >= 0 && indexOfItemToDrop < treasureChestArr.length) {
                    let removedItem = treasureChestArr.splice(indexOfItemToDrop, 1);
                    treasureChestArr.push(removedItem[0]);
                }
                break;

            case 'Steal':

                let itemsToSteal = Number(currentRowAsArray.shift());
                let stolenItems = '';

                if (treasureChestArr.length <= itemsToSteal) {
                    itemsToSteal = treasureChestArr.length;
                    stolenItems = treasureChestArr.splice(0, itemsToSteal)
                } else {
                    let startStealing = (treasureChestArr.length) - itemsToSteal;
                    stolenItems = treasureChestArr.splice(startStealing, itemsToSteal);
                }

                console.log(`${stolenItems.join(', ')}`);
                break;
        }

        currentRow = input.shift();
    }

    let treasureChestArrLength = treasureChestArr.length;
    let treasureItemsLength = 0;

    if (treasureChestArrLength < 1) {
        console.log("Failed treasure hunt.");
    } else {

        for (item of treasureChestArr) {
            treasureItemsLength += item.length;
        }

        let averageTreasureGain = treasureItemsLength / treasureChestArrLength
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);

