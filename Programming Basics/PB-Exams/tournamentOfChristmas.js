function tournamentOfChristmas(input) {

    let index = 0;
    let days = Number(input[index++]);
    let theInput = input[index++];

    let raisedMoneyByDay = 0;
    let totalRaisedMoney = 0;

    let totalWinsAndLose = 0;


    for (let i = 1; i <= days; i++) {
        let win = 0;
        let lose = 0;
        raisedMoneyByDay = 0;

        while (theInput !== "Finish") {

            let game = theInput;
            let result = input[index++];

            if (result === "win") {
                win++;
                totalWinsAndLose++
                raisedMoneyByDay += 20;
            } else if (result === "lose") {
                lose++;
                totalWinsAndLose--
            }

            
            theInput = input[index++];

        }

        if (win > lose) {
            raisedMoneyByDay *= 1.10;
        }

        totalRaisedMoney += raisedMoneyByDay;
        theInput = input[index++];


    }

    if (totalWinsAndLose > 0) {
        totalRaisedMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    }

}

tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])


