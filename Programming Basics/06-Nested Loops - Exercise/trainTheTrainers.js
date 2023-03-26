function trainTheTrainers(input) {
    
    let index = 0;
    let numberOfJury = Number(input[index]);
    index++
    let theInput = input[index];
    index++;
    let sum = 0;
    let allOfTheJury = 0;
    
    while(theInput !== "Finish") {

        let nameOfThePresentation = theInput;
        let curSum = 0;
        

        for(let i = 0; i < numberOfJury; i++) {
            let grade = Number(input[index]);
            index++
            curSum += grade; 
        }

        sum += curSum
        let curAverage = curSum / numberOfJury;
        console.log(`${nameOfThePresentation} - ${curAverage.toFixed(2)}.`);

        allOfTheJury += numberOfJury;
        theInput = input[index];
        index++

    }

    let avarage = sum / allOfTheJury;
    console.log(`Student's final assessment is ${avarage.toFixed(2)}.`);
    
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


