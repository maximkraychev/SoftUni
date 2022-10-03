function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {

        let printLine = '';
        
        for (let y = 1; y <= i; y++) {
            if (y == i) {
                printLine += `${i}`;
            } else {
                printLine += `${i} `;
            }
        }

        console.log(printLine);

    }
}

triangleOfNumbers(5)