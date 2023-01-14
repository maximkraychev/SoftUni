function fibonacci() {

    function getFibonator() {
        let beforeLastNumber = 1;
        let lastNumber = 0;
        let buff = 0;

        return function () {
            buff = lastNumber;
            lastNumber = beforeLastNumber + lastNumber;
            beforeLastNumber = buff;
            return lastNumber
        }
    }

    let fib = getFibonator();
    console.log(fib()); // 1
    console.log(fib()); // 1
    console.log(fib()); // 2
    console.log(fib()); // 3
    console.log(fib()); // 5
    console.log(fib()); // 8
    console.log(fib()); // 13
}

fibonacci();