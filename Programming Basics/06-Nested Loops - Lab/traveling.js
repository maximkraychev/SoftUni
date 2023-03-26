function traveling(input) {
    let index = 0;
    let inputData = input[index];
    let budget = 0;
    
    while(inputData !== "End") {
        let destination = inputData;
        index++;
        let minBudget = Number(input[index]);
        index++;

        while(budget < minBudget){
            let save = Number(input[index]);
            index++;
            budget += save;
            if(budget >= minBudget) {
                console.log(`Going to ${destination}!`);
                budget = 0;
                break;
            }
        }

        inputData = input[index];

    }

}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


