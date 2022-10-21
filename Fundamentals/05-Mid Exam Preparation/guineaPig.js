function guineaPig(input) {

    let month = 30;
    input.map(x => Number(x));
    let foodInGrams = input[0] * 1000;
    let hayInGrams = input[1] * 1000;
    let coverInGrams = input[2] * 1000;
    let weightInGrams = input[3] * 1000;

    let isTheProductEnough = true;
    let eatenFoodEachDay = 300;
    let neededHayInPercent = 0.05;


    for (let day = 1; day <= month; day++) {

        if (foodInGrams - eatenFoodEachDay > 0) {
            foodInGrams -= eatenFoodEachDay;
        } else {
            console.log('Merry must go to the pet store!');
            isTheProductEnough = false;
            break;
        }

        let neededHayInGrams = foodInGrams * neededHayInPercent;

        if (day % 2 === 0) {
            hayInGrams -= neededHayInGrams;
        }

        if (hayInGrams <= 0) {
            console.log('Merry must go to the pet store!');
            isTheProductEnough = false;
            break;
        }

        let neededCoverForTheDay = weightInGrams / 3;

        if (day % 3 === 0) {
            coverInGrams -= neededCoverForTheDay;
        }

        if (coverInGrams <= 0) {
            console.log('Merry must go to the pet store!');
            isTheProductEnough = false;
            break;
        }
    }

    if (isTheProductEnough) {
        let foodInKG = foodInGrams / 1000;
        let hayInKG = hayInGrams / 1000;
        let coverInKG = coverInGrams / 1000;
        console.log(`Everything is fine! Puppy is happy! Food: ${foodInKG.toFixed(2)}, Hay: ${hayInKG.toFixed(2)}, Cover: ${coverInKG.toFixed(2)}.`);
    }

}

guineaPig(["10", "5", "5.2", "1"]);

guineaPig(["1", "1.5", "3", "1.5"]);

guineaPig(["9", "5", "5.2", "1"]);