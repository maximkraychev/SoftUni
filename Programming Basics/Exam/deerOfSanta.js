function deerOfSanta(input) {

    let numberOfDaysForVacation = Number(input[0]);
    let foodInKG = Number(input[1]);
    let foodPerDayForTheFirstDeer= Number(input[2]);
    let foodPerDayForTheSecondDeer= Number(input[3]);
    let foodPerDayForTheThirdDeer= Number(input[4]);

    let foodNeededForTheFirstDeer = numberOfDaysForVacation * foodPerDayForTheFirstDeer;
    let foodNeededForTheSecondDeer = numberOfDaysForVacation * foodPerDayForTheSecondDeer;
    let foodNeededForTheThirdDeer = numberOfDaysForVacation * foodPerDayForTheThirdDeer;

    let foodNeeded = foodNeededForTheFirstDeer +foodNeededForTheSecondDeer + foodNeededForTheThirdDeer;
    
    let kg = Math.abs(foodInKG - foodNeeded);

    if(foodInKG >= foodNeeded) {
        console.log(`${Math.floor(kg)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(kg)} more kilos of food are needed.`);
    }

}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

