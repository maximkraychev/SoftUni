function santasHoliday(input) {

    let days = Number(input[0]);
    let type = input[1];
    let rating = input[2];

    let numberOFNights = days - 1;
    let sum = 0;

    switch(type) {
        case "room for one person":
            sum = numberOFNights * 18.00;
            break;
        case "apartment":
            sum = numberOFNights * 25.00;
            if(numberOFNights < 10) {
                sum *= 0.70;
            } else if(numberOFNights >= 10 && numberOFNights <= 15) {
                sum *= 0.65;
            } else {
                sum *= 0.50;
            }
            break;
        case "president apartment":
            sum = numberOFNights * 35.00;
            if(numberOFNights < 10) {
                sum *= 0.90;
            } else if(numberOFNights >= 10 && numberOFNights <= 15) {
                sum *= 0.85;
            } else {
                sum *= 0.80;
            }
            break;
    }

    if(rating === "positive") {
        sum *= 1.25;
    } else {
        sum *= 0.90;
    }
    
    console.log(sum.toFixed(2));
}

santasHoliday(["30",
"president apartment",
"negative"])

