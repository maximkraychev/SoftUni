function coins(input) {

    let inLeva = Number(input[0]);
    let money = Math.floor(inLeva * 100);
    let coinsCount = 0;

    while(money > 0) {
        if(money >= 200){
            money -= 200;
            coinsCount++;
        } else if(money >= 100) {
            money -= 100;
            coinsCount++;
        } else if(money >= 50) {
            money -= 50;
            coinsCount++;
        } else if(money >= 20) {
            money -= 20;
            coinsCount++;
        } else if(money >= 10) {
            money -= 10;
            coinsCount++;
        } else if(money >= 5) {
            money -= 5;
            coinsCount++;
        } else if(money >= 2) {
            money -= 2;
            coinsCount++;
        } else if(money >= 1) {
            money -= 1;
            coinsCount++;
        }
    }

    console.log(coinsCount); 

}

coins(["2.73"])