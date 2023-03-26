function substitute(input) {

    let k = input[0];
    let l = input[1];
    let m = input[2];
    let n = input[3];

    let firstNumberStart = Number(k + "8") + 1;
    let firstNumberEnd = Number("9" + l);
    let secondNumberStart = Number(m + "8") + 1;
    let secondNumberEnd = Number("9" + n);
    let count = 0;

    for(firstNumberStart; firstNumberStart <= firstNumberEnd; firstNumberStart++) {
        for(secondNumberStart; secondNumberStart <= secondNumberEnd; secondNumberStart++) {

            
            let a = firstNumberStart / 10
            let firstNumber1 = Math.floor(a)
            let secondNumber1 = firstNumberStart % 10;


            let b = secondNumberStart / 10
            let firstNumber2 = Math.floor(a)
            let secondNumber2 = secondNumberStart % 10;

            if(firstNumber1 % 2 === 0 && firstNumber2 % 2 === 0 && secondNumber1 % 2 === 1 && secondNumber2 % 2 === 1) {
                if(firstNumberStart === secondNumberStart) {
                    console.log("Cannot change the same player.");
                    continue
                } else {
                    console.log(`${firstNumberStart} - ${secondNumberStart}`);
                    count++
                }

            }
            if(count >= 6) {
                break;}
            
        }
        secondNumberStart = Number(m + "8") + 1;
    }
    
    
}

substitute(["6",
"7",
"5",
"6"])

