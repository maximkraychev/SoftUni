function bestPlayer(input) {

    let index = 0;
    let theInput = input[index];

    let bestPlayer = "";
    let numberOfGoals = 0;
    let isHeScores3times = false;

    while(theInput !== "END") {
        let nameOfThePlayer = theInput;
        index++
        let goals = Number(input[index]);
        index++
        theInput = input[index];

        if(bestPlayer === "" || numberOfGoals === 0) {
            bestPlayer = nameOfThePlayer;
            numberOfGoals = goals;
        }

        if(goals > numberOfGoals) {
            bestPlayer = nameOfThePlayer;
            numberOfGoals = goals;
        }

        if(numberOfGoals >= 3) {
            isHeScores3times = true;
        }

        if(numberOfGoals >= 10) {
            break;
        }
    }

console.log(`${bestPlayer} is the best player!`);

if(isHeScores3times) {
    console.log(`He has scored ${numberOfGoals} goals and made a hat-trick !!!`);
} else {
    console.log(`He has scored ${numberOfGoals} goals.`);
}
    
}

bestPlayer(["Petrov",
"2",
"Drogba",
"11"])

