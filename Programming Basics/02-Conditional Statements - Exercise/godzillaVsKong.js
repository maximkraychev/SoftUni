function godzillaVsKong(input) {

    let budgetForMovie = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let clothesPriceForOneExtras = Number(input[2]);

    let decor = budgetForMovie * 0.10;

    if(numberOfExtras >= 150) {
        clothesPriceForOneExtras *= 0.90;
    }

    let priceForTheMovie = numberOfExtras * clothesPriceForOneExtras + decor;

    let total = Math.abs(budgetForMovie - priceForTheMovie);
    
    if(priceForTheMovie > budgetForMovie) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${total.toFixed(2)} leva more.`);
    } else {
        console.log("Action!" );
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`);
    }

    
}

godzillaVsKong(["9587.88",
"222",
"55.68"]);


