function bitcoinMining(input) {

    let bitcoin = 0;
    let days = 0;
    let money = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let dayOfTheFirstPurcheseOfBitcoint = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        let minedGold = Number(input[i]);
        days++
        
        if (days % 3 === 0) {
            minedGold *= 0.70;
        }
        money += minedGold * goldPrice;

            for (money; money >= bitcoinPrice; money -= bitcoinPrice) {
                bitcoin++;
                if (bitcoin === 1) {
                    dayOfTheFirstPurcheseOfBitcoint = days;
                }
            }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin >= 1) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurcheseOfBitcoint}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

bitcoinMining([3124.15, 504.212, 2511.124]);