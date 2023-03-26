function cinema(input) {

    let projectionType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let total = 0;

    switch(projectionType) {
        case "Premiere":
            total = 12.00 * (rows * columns);
            break;
        case "Normal":
            total = 7.50 * (rows * columns);
            break;
        case "Discount":
            total = 5.00 * (rows * columns);
            break;
    }
    
    console.log(`${total.toFixed(2)} leva`);
}

cinema(["Discount",
"12",
"30"])


