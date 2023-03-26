function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    let trueOrFalse 

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }

    switch(fruit) {
        case "banana":
            if(day === "Saturday" || day === "Sunday") {
                price = quantity * 2.70;
            } else if(trueOrFalse === true) {
                price = quantity * 2.50;
            } else {
                console.log("error");
            }
            break;
        case "apple":
            if(day === "Saturday" || day === "Sunday") {
                price = quantity * 1.25;
            } else if(trueOrFalse === true) {
                price = quantity * 1.20;
            } else {
                console.log("error");
            }
            break;
        case "orange":
            if(day === "Saturday" || day === "Sunday") {
                price = quantity * 0.90;
            } else if(trueOrFalse === true) {
                price = quantity * 0.85;
            } else {
                console.log("error");
            }
            break;
        case "grapefruit":
            if(day === "Saturday" || day === "Sunday") {
                price = quantity * 1.60;
            } else if(trueOrFalse === true) {
                price = quantity * 1.45;
            } else {
                console.log("error");
            }
            break;
        case "kiwi":
            if(day === "Saturday" || day === "Sunday") {
                price = quantity * 3.00;
            } else if(trueOrFalse === true) {
                price = quantity * 2.70;
            } else {
                console.log("error");
            }
            break;
        case "pineapple":
            if(day === "Saturday" || day === "Sunday") {
                price = quantity * 5.60;
            } else if(trueOrFalse === true) {
                price = quantity * 5.50;
            } else {
                console.log("error");
            }
            break;
        case "grapes":
            if(day === "Saturday" || day === "Sunday") {
                price = quantity * 4.20;
            } else if(trueOrFalse === true){
                price = quantity * 3.85;
            } else {
                console.log("error");
            }
            break;
            default:
                console.log("error");
                break;
    }
    
    if(price > 0) {
        console.log(price.toFixed(2));
    }
}

fruitShop(["tomato",
"Monday",
"0.5"])








