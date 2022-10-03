function ages(age) {
    
    let printLine;

    if(age < 0) {
        printLine = 'out of bounds';
    } else if(age < 3) {
        printLine = 'baby';
    } else if(age < 14) {
        printLine = 'child';
    } else if(age < 20) {
        printLine = 'teenager';
    } else if(age < 66) {
        printLine = 'adult';
    } else if(age >= 66) {
        printLine = 'elder';
    }

    console.log(printLine);
}

ages(-1)