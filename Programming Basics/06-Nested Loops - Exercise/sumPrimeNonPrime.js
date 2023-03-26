function sumPrimeNonPrime(input) {

    let index = 0; 
    let theInput = input[index];
    index++
    let primeNumbers = 0;
    let notPrimeNumbers = 0;

    while(theInput !== "stop"){
        let numbers = Number(theInput);
        theInput = input[index];
        index++

        if(numbers < 0) {
            console.log("Number is negative.");
            continue;
        }

        if(numbers === 1) {
            notPrimeNumbers += numbers;
            continue;
        }

        let isItPossibleToBePrime = true;

        for(let i = 2; i < numbers; i++) {
            if (numbers % i === 0) {
                notPrimeNumbers += numbers;
                isItPossibleToBePrime = false;
                break;
            } 
        }

        if(isItPossibleToBePrime) {
            primeNumbers += numbers;
        }
    }

    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeNumbers}`);
    
}

sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])


