function accountBalance(input) {
    
    let index = 0;
    let payment = 0;
    let sum = 0;

    while(input[index] !== "NoMoreMoney") {
        
        payment = Number(input[index]);
        index++;

        if(payment < 0) {
            console.log(`Invalid operation!`);
            break;
        } else {
            sum += payment;
            console.log(`Increase: ${payment.toFixed(2)}`);
        }
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])
