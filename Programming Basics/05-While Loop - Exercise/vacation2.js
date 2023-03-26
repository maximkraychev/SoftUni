function vacation2(input) { 

    let index = 0;
    let needMoneyForVacation = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;

    let spendDayCounter = 0;
    let dayCounter = 0;
    let isPosibleToSaveMoney = true;

    while(needMoneyForVacation > currentMoney) {
        dayCounter++;
        let command = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;

        switch(command) {
            case "spend":
                currentMoney -= tempMoney;
                spendDayCounter++;
                break;
            case "save":
                currentMoney += tempMoney;
                spendDayCounter = 0;
        }
        if (currentMoney < 0 ) {
            currentMoney = 0;
        }

        if(spendDayCounter === 5) {
            console.log("You can't save the money.");
            console.log(dayCounter);
            isPosibleToSaveMoney = false;
            break;
        }

    }

    if(isPosibleToSaveMoney){
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}