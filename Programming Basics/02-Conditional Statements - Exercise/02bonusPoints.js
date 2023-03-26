function bonusPoints(input) {
    
    let basePoints = Number(input[0]);
    let bonus = 0

    if (basePoints <= 100) {
        bonus = 5;
    } else if(basePoints <= 1000) {
        bonus = basePoints * 0.20;
    } else if(basePoints > 1000) {
        bonus = basePoints *0.10;
    }

    if( basePoints % 2 === 0) {
        bonus++
    } else if (basePoints % 10 === 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(basePoints + bonus);
}

bonusPoints(["15875"]);

