function orders(products, quantity) {

    let totalPrice = getPrice(products) * quantity;

    console.log(totalPrice.toFixed(2));

    function getPrice(products) {

        let price = 0;

        switch(products) {
            case 'coffee': price = 1.50; break;
            case 'water': price = 1; break;
            case 'coke': price = 1.40; break;
            case 'snacks': price = 2.00; break;
        }

        return price;
    }

}

orders("water", 5);