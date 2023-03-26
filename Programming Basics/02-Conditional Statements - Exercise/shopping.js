function shopping(input) {

    const GPU = 250.00;

    let budget = Number(input[0]);
    let numberGpu = Number(input[1]);
    let numberCpu = Number(input[2]);
    let numberRam = Number(input[3]);

    let priceGpu = GPU * numberGpu;

    let cpu = priceGpu * 0.35;
    let ram = priceGpu * 0.10;

    let neededMoney = cpu * numberCpu + ram * numberRam + priceGpu;

    if(numberGpu > numberCpu) {
        neededMoney *= 0.85;
    }

    let total =Math.abs(budget - neededMoney);

    if(budget >= neededMoney){
        console.log(`You have ${total.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${total.toFixed(2)} leva more!`);
    }
}

shopping(["900",
"2",
"1",
"3"]);


