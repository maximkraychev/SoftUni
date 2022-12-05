function easterEggs(input) {

    let text = input[0];

    const regExp = /[@#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z\d]*\/+(?<amount>\d+)\/+/g;

    let matches = text.matchAll(regExp);

    for (let match of matches) {
        const currentColor = match.groups.color;
        const currentAmount = match.groups.amount;
        console.log(`You found ${currentAmount} ${currentColor} eggs!`);
    }
}

//easterEggs((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']));

easterEggs((['#@##@red@#/8/@rEd@/2/#@purple@////10/']));