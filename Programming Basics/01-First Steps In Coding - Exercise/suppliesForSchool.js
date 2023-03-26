function suppliesForSchool(input){

    const PENS_PRICE = 5.80;
    const MARKERS_PRICE = 7.20;
    const BOARD_CLEANER_PRICE = 1.20;
    
    let packetPens = Number(input[0]);
    let packetMarkers = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let discount = Number(input[3]);

    let priceWithoutDiscount = packetPens * PENS_PRICE + packetMarkers * MARKERS_PRICE + boardCleaner * BOARD_CLEANER_PRICE;
    
    let total = priceWithoutDiscount - priceWithoutDiscount * (discount / 100);
    
    console.log(total);
}

suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)