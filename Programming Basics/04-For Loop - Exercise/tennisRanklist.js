function tennisRanklist(input) {

    let index = 0;

    let numberOfTournaments = Number(input[index]);
    index++
    let pointsAtTheBeginning = Number(input[index]);
    index++
    let pointsFromTournaments = 0;
    let wins = 0;

    for(let i = 0; i <= numberOfTournaments; i++) {
       let stage = input[index];
       index++
        if(stage === "W") {
            pointsFromTournaments += 2000;
            wins++
        } else if(stage === "F") {
            pointsFromTournaments += 1200;
        } else if(stage === "SF") {
            pointsFromTournaments += 720;
        }
    }

    let averagePoints = pointsFromTournaments / numberOfTournaments;
    let finalPoints = pointsFromTournaments + pointsAtTheBeginning;
    let winPercent = (wins / numberOfTournaments) * 100;
    
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
"SF",
"W"])

