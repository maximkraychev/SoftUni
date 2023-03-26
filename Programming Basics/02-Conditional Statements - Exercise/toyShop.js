function toyShop(input) {

    const PUZZLE = 2.60;
    const DOLL = 3.00;
    const BEAR = 4.10;
    const MINION = 8.20;
    const TRUCK = 2.00;

    let priceForExcursion = Number(input[0]);
    let numberOfPuzzle = Number(input[1]);
    let numberOfDoll = Number(input[2]);
    let numberOfBear = Number(input[3]);
    let numberOfMinion = Number(input[4]);
    let numberOFTruck = Number(input[5]);

    let rent = 0.10;

    let raisedMoney = PUZZLE * numberOfPuzzle + DOLL * numberOfDoll + BEAR * numberOfBear + MINION * numberOfMinion + TRUCK * numberOFTruck;

    if(numberOfPuzzle + numberOfDoll + numberOfBear + numberOfMinion + numberOFTruck >= 50) {
        raisedMoney = raisedMoney - (raisedMoney * 0.25);
    }
    
    raisedMoney = raisedMoney - (raisedMoney *rent);

    let diffrence = Math.abs(raisedMoney - priceForExcursion);

    if(raisedMoney >= priceForExcursion) {
        console.log(`Yes! ${diffrence.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diffrence.toFixed(2)} lv needed.`);
    }

}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


