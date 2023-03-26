function catWalking(input) {

    const CALORIESPERMIN = 5;

    let walkMinutes = Number(input[0]);
    let numberOfWalks = Number(input[1]);
    let consumedCalories = Number(input[2]);

    let inMin = walkMinutes * numberOfWalks;
    let burnedcalories =  inMin * CALORIESPERMIN;
    let halfOfConsumedCalories = consumedCalories * 0.50;

    if(burnedcalories >= halfOfConsumedCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedcalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedcalories}.`);
    }
    
}

catWalking(["15",
"2",
"500"])

