function examPreparation(input) {
    let index = 0;
    let possibleBadGrades = Number(input[index]);
    index++
    let taskName = input[index];
    index++
    let grades = Number(input[index]);
    let badGrades = 0;
    let numberOfTasks = 0;
    let sum = 0;

    while(taskName !== "Enough") {
        if(grades <= 4) {
            badGrades++
            if(badGrades === possibleBadGrades) {
                numberOfTasks++
                break;
            }
        }
        numberOfTasks++
        sum += grades;
        index++
        taskName = input[index];
        index++
        grades = Number(input[index]);
    }
    
    let averageScore = sum / numberOfTasks;
    let lastTask = input[index - 3];
    
    if(taskName === "Enough") {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfTasks}`);
        console.log(`Last problem: ${lastTask}`);
    } else if (badGrades === possibleBadGrades) {
        console.log(`You need a break, ${badGrades} poor grades.`);
    } 
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


