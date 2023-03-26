function cake(input) {

    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeLength = Number(input[index]);
    index++;
    let inputPieces = input[index];

    let cake = cakeWidth * cakeLength;


    while(inputPieces !== "STOP") {
        let numberOfThePieces = Number(inputPieces);
        index++;
        inputPieces = input[index];
        if(cake > 0){
            cake -= numberOfThePieces;
            if(cake <= 0){
                break;
            }
        } 
    }

    

    if(cake > 0) {
        console.log(`${cake} pieces are left.`);
    } else {
        let diff = Math.abs(cake)
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }
    
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

