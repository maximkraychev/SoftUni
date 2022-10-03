function printAndSum(start,end) {

    let firstRow = '';
    let sum = 0;

    for(let i = start; i <= end; i++) {
        sum += i;
        if(i === end) {
            firstRow += `${i}`
        } else {
            firstRow += `${i} `
        }
    }

    console.log(firstRow);
    console.log(`Sum: ${sum}`);
    
}

printAndSum(50, 60)