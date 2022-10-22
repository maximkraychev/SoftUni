function blackFlag(input) {

    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let totalPlunded = Number();
    
    for (let day = 1; day <= days; day++) {
        totalPlunded += dailyPlunder;

        if(day % 3 === 0) {
            totalPlunded += dailyPlunder * 0.50;
        }

        if(day % 5 === 0) {
            totalPlunded *= 0.70;
        }
    }

    if(totalPlunded >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunded.toFixed(2)} plunder gained.`);
    } else {
        let percentagelLeft = (totalPlunded / expectedPlunder) * 100
        console.log(`Collected only ${percentagelLeft.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5",
"40",
"100"]
);

blackFlag(["10",
"20",
"380"])
