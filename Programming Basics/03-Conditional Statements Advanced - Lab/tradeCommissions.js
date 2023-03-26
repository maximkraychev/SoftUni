function tradeCommissions(input) {

    let city = input[0];
    let commission = Number(input[1]);
    let percent = 0;

    switch(city) {
        case "Sofia":
            if(commission >= 0 && commission <= 500) {
                percent = 0.05;
            } else if(commission > 500 && commission <= 1000) {
                percent = 0.07;
            } else if(commission > 1000 && commission <= 10000) {
                percent = 0.08;
            } else if(commission > 10000) {
                percent = 0.12;
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if(commission >= 0 && commission <= 500) {
                percent = 0.045;
            } else if(commission > 500 && commission <= 1000) {
                percent = 0.075;
            } else if(commission > 1000 && commission <= 10000) {
                percent = 0.10;
            } else if(commission > 10000) {
                percent = 0.13;
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if(commission >= 0 && commission <= 500) {
                percent = 0.055;
            } else if(commission > 500 && commission <= 1000) {
                percent = 0.08;
            } else if(commission > 1000 && commission <= 10000) {
                percent = 0.12;
            } else if(commission > 10000) {
                percent = 0.145;
            } else {
                console.log("error");
            }
            break;
            default:
                console.log("error");
    }
    
    if(percent != 0) {
        percent *= commission 
        console.log(percent.toFixed(2));
    } 
}

tradeCommissions(["Kaspichan",
"-50"])




