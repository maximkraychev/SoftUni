function maxNumber(input) {

    let index = 0;
    let forTheLoop = input[index];
    let maxNumber = Number(input[index]);
    
    while(forTheLoop !== "Stop") {
        let theInput = Number(input[index]);
        index++
        forTheLoop = input[index];
        if(theInput > maxNumber) {
            maxNumber = theInput;
        }
    }
    console.log(maxNumber);
}

maxNumber(["999",
"Stop"])

