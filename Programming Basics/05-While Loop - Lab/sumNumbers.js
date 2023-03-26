function sumNumbers(input) {
    let index = 0;
    let maxNumber = Number(input[index])
    index++;
    let numbers = Number(input[index]);

    let counter = 0;

    while(maxNumber > counter) {
        counter += numbers;
        index++
        numbers = Number(input[index]);
    }
    console.log(counter);   
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
