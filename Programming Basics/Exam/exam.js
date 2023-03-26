function exam(input) {

    let index = 0;
    let numberOfStident = Number(input[index++]);
    let grade = Number(input[index++]);

    let from2to3 = 0;
    let from3to4 = 0;
    let from4to5 = 0;
    let from5andAbove = 0;
    let sum = 0;

    for(let i = 1; i <= numberOfStident; i++) {

        sum += grade;

        if(grade <= 2.99) {
            from2to3++;
        } else if(grade <= 3.99) {
            from3to4++
        } else if(grade <= 4.99) {
            from4to5++
        } else if(grade >= 5.00) {
            from5andAbove++
        }

        grade = Number(input[index++]); 
    }

    let from2to3Percentege = (from2to3 / numberOfStident) * 100;
    let from3to4Percentege = (from3to4 / numberOfStident) * 100;
    let from4to5Percentege = (from4to5 / numberOfStident) * 100;
    let from5andAbovePercentege = (from5andAbove / numberOfStident) * 100;

    let average = sum / numberOfStident;

    console.log(`Top students: ${from5andAbovePercentege.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${from4to5Percentege.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${from3to4Percentege.toFixed(2)}%`);
    console.log(`Fail: ${from2to3Percentege.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
    
}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

