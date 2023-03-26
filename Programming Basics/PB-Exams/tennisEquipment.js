function tennisEquipment(input) {

    let oneTennisRacket = Number(input[0]);
    let numberTennisRacket = Number(input[1]);
    let numberShoes = Number(input[2]);

    let oneShoesPrice = oneTennisRacket / 6;

    let priceForTenisRacket = oneTennisRacket * numberTennisRacket;
    let priceForShoes = numberShoes * oneShoesPrice;

    let otherEqipment = (priceForShoes + priceForTenisRacket) * 0.2; 
    let overalSum = priceForShoes + priceForTenisRacket + otherEqipment;

    let paidByDjokovic = overalSum / 8;
    let paidBySponsors = overalSum - paidByDjokovic;

    console.log(`Price to be paid by Djokovic ${Math.floor(paidByDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(paidBySponsors)}`);
    
}

tennisEquipment(["386",
"7",
  "4"])