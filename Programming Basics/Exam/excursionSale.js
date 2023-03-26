function excursionSale(input) {
    
    let index = 0;
    let numberForSea = Number(input[index++]);
    let numberForMountain = Number(input[index++]);
    let seeOrMountain = input[index++];

    let totalSum = 0;

    while(seeOrMountain !== "Stop") {

        switch(seeOrMountain) {
            case "sea":
                if(numberForSea > 0) {
                    totalSum += 680;
                    numberForSea--;
                }
                break;
            case "mountain":
                if(numberForMountain > 0) {
                    totalSum += 499;
                    numberForMountain--;
                }
                break;
        }

        if(numberForSea === 0 && numberForMountain === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }

        seeOrMountain = input[index++];
    }

    console.log(`Profit: ${totalSum} leva.`);
    
}

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

