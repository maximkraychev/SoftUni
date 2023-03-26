function minNumber(input) {
    let index = 0;
    let forTheLoop = input[index];
    let minNumber = Number(input[index]);
    
    while(forTheLoop !== "Stop") {
        let theInput = Number(input[index]);
        index++
        forTheLoop = input[index];
        if(theInput < minNumber) {
            minNumber = theInput;
        }
    }
    console.log(minNumber);
}

minNumber(["999",
"Stop"])
