function experienceGaining(input) {

    let experienceNeeded = Number(input.shift());
    let countOfBattles = Number(input[0]);
    let experienceGathered = 0;
    let experienceEarnedPerBattle = input.slice();
    let isTheXpEnough = false;


    for (let index = 1; index <= countOfBattles; index++) {
        let currentXpPerBattle = experienceEarnedPerBattle[index];

        experienceGathered += currentXpPerBattle

        if (index % 3 === 0) {
            let bonusXp = currentXpPerBattle * 0.15;
            experienceGathered += bonusXp;
        }

        if (index % 5 === 0) {
            let lessXp = currentXpPerBattle * 0.10;
            experienceGathered -= lessXp;
        }

        if (index % 15 === 0) {
            let bonusXpForTheBattle = currentXpPerBattle * 0.05;
            experienceGathered += bonusXpForTheBattle;
        }

        if (experienceGathered >= experienceNeeded) {
            console.log(`Player successfully collected his needed experience for ${index} battles.`);
            isTheXpEnough = true;
            break;
        }
    }

    let neededXP = experienceNeeded - experienceGathered;

    if (!isTheXpEnough) {
        console.log(`Player was not able to collect the needed experience, ${neededXP.toFixed(2)} more needed.`);
    }
}

experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30]);

    // experienceGaining([400,
    //     5,
    //     50,
    //     100,
    //     200,
    //     100,
    //     20])

