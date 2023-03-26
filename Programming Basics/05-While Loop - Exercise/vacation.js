function vacation(input) {

    let index = 0;
    let moneyForVacation = Number(input[index]);
    index++;
    let curMoney = Number(input[index]);
    index++;
    let count = 0;
    let negativeCount = 0;

    while(moneyForVacation > curMoney) {

        let spendOrSave = input[index];
        index++;
        let money = Number(input[index]);
        index++;

        switch(spendOrSave) {
            case "spend":
                curMoney -= money;
                count++;
                negativeCount++;
                if(curMoney < 0) {
                    curMoney = 0;
                }
                break;
            case "save":
                curMoney += money;
                count++
                negativeCount = 0;
                break;
        }

        if(negativeCount === 5) {
            console.log("You can't save the money.");
            console.log(count);
            break;
        } else if(curMoney >= moneyForVacation) {
            console.log(`You saved the money for ${count} days.`);
            break;
        }
    }
}