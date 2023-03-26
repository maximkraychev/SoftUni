function numberInRange(input) {

    let number = Number(input[0]);

    if(number === 0){
        console.log("No");
    } else if(number >= -100 && number <=100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInRange(["-100"])