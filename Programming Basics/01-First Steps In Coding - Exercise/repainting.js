function repainting(input){
    
    const NYLON = 1.50;
    const PAINT = 14.50;
    const PAINTTHINNER = 5;

    let bag = 0.40;

    let requiredNylon = Number(input[0]);
    let requiredPaint = Number(input[1]);
    let requiredPaintThinner = Number(input[2]);
    let workHour = Number(input[3]);

    requiredPaint = requiredPaint * 1.1;
    requiredNylon = requiredNylon + 2;

    let materialCost = requiredNylon * NYLON + requiredPaint * PAINT + requiredPaintThinner * PAINTTHINNER + bag;
    
    let workerPricePerHour = materialCost * 0.30;

    let workerPrice = workerPricePerHour * workHour; 

    let total = workerPrice + materialCost;

    console.log(total);
}

repainting(["5 ",
"10 ",
"10 ",
"1 "]
)