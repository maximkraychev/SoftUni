function gladiatorExpenses(allLostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let countOfBrokenShield = 0;

    for (let lostFightsCount = 1; lostFightsCount <= allLostFights; lostFightsCount++) {


        if (lostFightsCount % 2 === 0) {
            expenses += helmetPrice;
        }

        if (lostFightsCount % 3 === 0) {
            expenses += swordPrice;
        }

        if (lostFightsCount % 2 === 0 && lostFightsCount % 3 === 0) {
            expenses += shieldPrice;
            countOfBrokenShield++;
        }

        if (countOfBrokenShield > 0 && countOfBrokenShield % 2 === 0) {
            expenses += armorPrice;
            countOfBrokenShield = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200)