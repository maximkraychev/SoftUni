function addBags(input) {

    let priceForLuggage = Number(input[0]);
    let luggageKg = Number(input[1]);
    let daysUntilTheJourney = Number(input[2]);
    let numberOfLuggages = Number(input[3]);

    let totalPrice = 0;

    if(luggageKg < 10) {
        totalPrice = priceForLuggage * 0.20;
    } else if(luggageKg >= 10 && luggageKg <= 20) {
        totalPrice = priceForLuggage * 0.50;
    } else {
        totalPrice = priceForLuggage;
    }

    if(daysUntilTheJourney > 30) {
        totalPrice += totalPrice * 0.10;
    } else if (daysUntilTheJourney >= 7 && daysUntilTheJourney <= 30) {
        totalPrice += totalPrice * 0.15;
    } else if (daysUntilTheJourney < 7) {
        totalPrice += totalPrice * 0.40;
    }

    totalPrice *= numberOfLuggages;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

addBags(["63.80",
"23",
"3",
"1"])


