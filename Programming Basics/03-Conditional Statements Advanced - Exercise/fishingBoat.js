function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let number = Number(input[2]);

    let boat = 0;

    switch(season) {
        case "Spring":
            boat = 3000;
            if(number <= 6) {
                boat *= 0.90;
            } else if(number >= 7 && number <= 11) {
                boat *= 0.85;
            } else if(number >12) {
                boat *= 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            boat = 4200;
            if(number <= 6) {
                boat *= 0.90;
            } else if(number >= 7 && number <= 11) {
                boat *= 0.85;
            } else if(number >12) {
                boat *= 0.75;
            }
            break;
        case "Winter":
            boat = 2600;
            if(number <= 6) {
                boat *= 0.90;
            } else if(number >= 7 && number <= 11) {
                boat *= 0.85;
            } else if(number >12) {
                boat *= 0.75;
            }
            break;
    }
    if(number % 2 === 0 && season != "Autumn") {
        boat *= 0.95;
    }

    let total = Math.abs(budget - boat);

    if(budget >= boat) {
        console.log(`Yes! You have ${total.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${total.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000",
"Winter",
"13"])

