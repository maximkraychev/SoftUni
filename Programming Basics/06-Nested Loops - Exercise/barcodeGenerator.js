function barcodeGenerator(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let startString = start.toString();
    let endString = end.toString();

    let startFirstNumber = Number(startString[0]);
    let startSecondNumber = Number(startString[1]);
    let startThirdNumber = Number(startString[2]);
    let startFourthNumber = Number(startString[3]);

    let endFirstNumber = Number(endString[0]);
    let endSecondNumber = Number(endString[1]);
    let endThirdNumber = Number(endString[2]);
    let endFourthNumber = Number(endString[3]);

    let output = "";
    
    for(let one = startFirstNumber; one <= endFirstNumber; one++) {
        if(one % 2 !== 0) {
            for(let two = startSecondNumber; two <= endSecondNumber; two++) {
                if(two % 2 !==0) {
                    for(let three = startThirdNumber; three <= endThirdNumber; three++) {
                        if(three % 2 !== 0) {
                            for(let four = startFourthNumber; four <= endFourthNumber; four++) {
                                if(four % 2 !== 0) {
                                    output += `${one}` + `${two}` + `${three}` + `${four}` + " ";
                                } else {
                                    continue;
                                }
                            }
                        } else {
                            continue;
                        }
                    }
                } else {
                    continue;
                }
            }
        } else {
            continue;
        }
    }
    
    console.log(output);
}

barcodeGenerator(["1365",
"5877"])


