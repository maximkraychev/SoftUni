function nxnMatrix(number) {

    for (let i = 0; i < number; i++) {

        let printOnConsole = '';

        for (let j = 0; j < number; j++) {
            printOnConsole += number;

            if (j < number - 1) {
                printOnConsole += ' ';
            }
        }

        console.log(printOnConsole);
    }
}

nxnMatrix(7);