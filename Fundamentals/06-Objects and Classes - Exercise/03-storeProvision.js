function storeProvision(currentStock, delivery) {
    
    let stockInTheStore = {};

    for (let index = 0; index < currentStock.length; index += 2) {
        let product = currentStock[index];
        let quantity  = Number(currentStock[index + 1]);
        stockInTheStore[product] = quantity;
    }

    for (let index = 0; index < delivery.length; index += 2) {

        let product = delivery[index];
        let quantity  = Number(delivery[index + 1]);

        if(stockInTheStore.hasOwnProperty(product)) {
            stockInTheStore[product] = stockInTheStore[product] + quantity;
        } else {
            stockInTheStore[product] = quantity; 
        }
    }

    let arrayOfStockInTheStore = Object.entries(stockInTheStore);

    for ([product, quantity] of arrayOfStockInTheStore) {
        console.log(`${product} -> ${quantity}`);
    }
}

storeProvision(
    [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );