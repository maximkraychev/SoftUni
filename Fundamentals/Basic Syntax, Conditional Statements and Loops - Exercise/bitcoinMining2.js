function bitcoinMining(input) {

let bitcoinPrice = 11949.16;
let oneGramOfGold = 67.51;

let dayCount = 0;
let money = 0
let purchasedBitcoins = 0;
let dayOfTheFirstPurcheseOfBitcoint;

for(let i = 0; i < input.length; i++) {
    dayCount++;
    let minedGold = Number(input[i]);

    if(dayCount % 3 === 0){
        minedGold *= 0.70;
    }
    
    money += minedGold * oneGramOfGold;

    while(money >= bitcoinPrice) {
        purchasedBitcoins++;
        if (purchasedBitcoins === 1) {
            dayOfTheFirstPurcheseOfBitcoint = dayCount;
        }
        money -= bitcoinPrice; 
    }
}
console.log(`Bought bitcoins: ${purchasedBitcoins}`);

if(purchasedBitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurcheseOfBitcoint}`);
} 

console.log(`Left money: ${money.toFixed(2)} lv.`);

}

bitcoinMining([3124.15, 504.212, 2511.124]);