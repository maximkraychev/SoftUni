function sequence2kPlus1(input) {

    let n = Number(input[0]);
    let number = 0;

    while(number < n) {
        number = (number * 2) + 1
        if(number > n) {
            break;
        }
        console.log(number);
    }
    
}

sequence2kPlus1(["17"])