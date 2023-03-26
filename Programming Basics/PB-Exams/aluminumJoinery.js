function aluminumJoinery(input) {

    let numberOFJoinery = Number(input[0]);
    let type = input[1];
    let delivery = input[2];
    let totalPrice = 0;

    if(numberOFJoinery < 10) {
        console.log("Invalid order");
    }

    switch(type) {
        case "90X130":
            totalPrice = numberOFJoinery * 110;
            if(numberOFJoinery > 60){
                totalPrice -= totalPrice * 0.08;
            } else if (numberOFJoinery > 30) {
                totalPrice -= totalPrice * 0.05;
            }
            break;
        case "100X150":
            totalPrice = numberOFJoinery * 140;
            if(numberOFJoinery > 80){
                totalPrice -= totalPrice * 0.10;
            } else if (numberOFJoinery > 40) {
                totalPrice -= totalPrice * 0.06;
            }
            break;
        case "130X180":
            totalPrice = numberOFJoinery * 190;
            if(numberOFJoinery > 50){
                totalPrice -= totalPrice * 0.12;
            } else if (numberOFJoinery > 20) {
                totalPrice -= totalPrice *0.07;
            }
            break;
        case "200X300":
            totalPrice = numberOFJoinery * 250;
            if(numberOFJoinery > 50){
                totalPrice -= totalPrice * 0.14;
            } else if (numberOFJoinery > 25) {
                totalPrice -= totalPrice * 0.09;
            }
            break;
    }

    if(delivery === "With delivery") {
        totalPrice += 60;
    }

    if(numberOFJoinery > 99) {
        totalPrice -= totalPrice * 0.04;
    }

    if(numberOFJoinery >= 10) {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
    
}

aluminumJoinery(["2",
"130X180",
"With delivery"])
