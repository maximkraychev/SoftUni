function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice =Number(input[1]);
    let priceForToy = Number(input[2]);

    let money = 0;
    let toys = 0;
    let multiplier = 1;

    for(let i = 1; i <= age; i++) {
        if(i % 2 === 0) {
            money += 10 * multiplier;
            multiplier++;
            money--;
        } else {
            toys++
        }
    }

    money += priceForToy * toys;

    let positivSum = Math.abs(money - washingMachinePrice);

    if(money >= washingMachinePrice) {
        console.log(`Yes! ${positivSum.toFixed(2)}`);
    } else {
        console.log(`No! ${positivSum.toFixed(2)}`);
    }
    
}   

cleverLily(["21",
"1570.98",
"3"])






//10
//20 = 30
//30 = 60
//40 = 100
//50 = 150