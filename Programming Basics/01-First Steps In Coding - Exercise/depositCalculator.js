function depositCalculator(input){
    
    let interest = Number(input[0]) * (Number(input[2]) / 100);

    let oneMonth = interest / 12;

    let sum = Number(input[0]) + Number(input[1]) * oneMonth;

    console.log(sum);
}
depositCalculator(["2350",
"6 ",
"7 "]
)
