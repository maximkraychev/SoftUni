function oscars(input) {

    let actor = input[0];
    let pointsFromAcademy = Number(input[1]);
    let points = pointsFromAcademy;

    for(let i = 3; i <= input.length - 1; i += 2) {
        let jury = input[i].length;
        let rating = Number(input[i+1]);
        points += (jury * rating) / 2;

        if(points >= 1250.5) {
            break;
        }
    }

    let diff = 1250.5 - points;

    if(points >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
    
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
