function yardGreening(input){
    const PRICE_PER_SQUARE_METER = 7.61;
    const DISCOUNT = 18 / 100

    let numberOfSquareMeters = Number(input[0]);

    let totalPriceWithoutDiscount = numberOfSquareMeters * PRICE_PER_SQUARE_METER;
    let discountPrice = totalPriceWithoutDiscount * DISCOUNT;
    let totalPrice = totalPriceWithoutDiscount - discountPrice;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}

yardGreening(["150"]);