function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let print = "";

    for(let i = start; i <= end; i++) {
        let iToString = i.toString();
        let firstEvenNumber = Number(iToString[0]);
        let secondEvenNumber = Number(iToString[2]);
        let thirdEvenNumber = Number(iToString[4]);
        let firstOddNumber = Number(iToString[1]);
        let secondOddNumber = Number(iToString[3]);
        let thirdOddNumber = Number(iToString[5]);

        let even = firstEvenNumber + secondEvenNumber + thirdEvenNumber;
        let odd = firstOddNumber + secondOddNumber + thirdOddNumber;

        if(even === odd){
           print += i + " ";
        }
        
    }
    console.log(print);
}

equalSumsEvenOddPosition(["299900",
"300000"])

