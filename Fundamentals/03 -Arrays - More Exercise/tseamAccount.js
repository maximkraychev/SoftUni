function tseamAccount(input) {

    let allInstaledGames = input.shift().split(' ');

    let currentRow = input.shift();

    while (currentRow !== 'Play!') {
        let currentRowAsArray = currentRow.split(' ');
        let command = currentRowAsArray[0];
        let game = currentRowAsArray[1];

        if (command === 'Install') {
            if (!allInstaledGames.includes(game)) {
                allInstaledGames.push(game);
            }
        }

        if (command === 'Uninstall') {
            if (allInstaledGames.includes(game)) {
                let indexToRemove = allInstaledGames.indexOf(game);
                let firstPart = allInstaledGames.slice(0, indexToRemove)
                let secondPart = allInstaledGames.slice(indexToRemove + 1)
                allInstaledGames = firstPart.concat(secondPart)
            }
        }

        if (command === 'Update') {
            if (allInstaledGames.includes(game)) {
                let indexToUpdate = allInstaledGames.indexOf(game);
                let gameToUpdate = allInstaledGames.splice(indexToUpdate, 1)
                allInstaledGames.push(gameToUpdate[0]);
            }
        }

        if (command === 'Expansion') {
            let basicGamePlusExpansionArray = game.split('-');
            let basicGame = basicGamePlusExpansionArray[0];
            let Expansion = basicGamePlusExpansionArray[1]
            if (allInstaledGames.includes(basicGame)) {
                let baseGameIndex = allInstaledGames.indexOf(basicGame);
                allInstaledGames.splice(baseGameIndex + 1, 0, `${basicGame}:${Expansion}`);
            }
        }

        currentRow = input.shift();
    }

    console.log(allInstaledGames.join(' '));

}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)