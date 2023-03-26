function walking(input) {

    let index = 0;
    let goal = 10000;
    let stepsSoFar = 0;
    let stepsInput = input[index];

    while(stepsInput !== "Going home") {
        let stepsInNumbers = Number(stepsInput);
        index++;
        stepsInput = input[index];
        stepsSoFar += stepsInNumbers;
        if(stepsSoFar > goal) {
            break;
        }
    }
    

    if(stepsInput === "Going home") {
        index++;
        let goingHomeSteps = Number(input[index]);
        stepsSoFar += goingHomeSteps;
    }

    let diff = Math.abs(stepsSoFar - goal);

    if(stepsSoFar > goal) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



