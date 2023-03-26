function gameNumberWars(input) {

    index = 0;
    let player1 = input[index];
    index++;
    let player2 = input[index];
    index++;
    let programInput = input[index]
    index++
    
    let player1Points = 0;
    let player2Points = 0;

    let isNotPossibleToHaveNumberWars = true;


    while(programInput !== "End of game") {
        let player1Card = Number(programInput);
        let player2Card = Number(input[index]);
        index++

        if(player1Card > player2Card) {
            player1Points += player1Card - player2Card;
        } else if(player1Card < player2Card) {
            player2Points += player2Card - player1Card;
        } else {
            let player1ExtraCard = Number(input[index]);
            index++
            let player2ExtraCard = Number(input[index]);
            index++
            isNotPossibleToHaveNumberWars = false

            if(player1ExtraCard > player2ExtraCard) {
                console.log("Number wars!");
                console.log(`${player1} is winner with ${player1Points} points`);
                break;
            } else if(player1ExtraCard < player2ExtraCard) {
                console.log("Number wars!");
                console.log(`${player2} is winner with ${player2Points} points`);
                break;
            }
        }
        programInput = input[index]
        index++
    }

    if(isNotPossibleToHaveNumberWars) {
        console.log(`${player1} has ${player1Points} points`);
        console.log(`${player2} has ${player2Points} points`);
    }
}

gameNumberWars(["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"])



