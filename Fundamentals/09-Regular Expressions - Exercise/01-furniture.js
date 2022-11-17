function furniture(array) {

    const regiX = />>\b(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+.?\d*)!(?<quantity>\d+)\b/g;

    let line = array.shift();
    let sum = 0;
    let allFurniture = []

    while (line !== 'Purchase') {

        let match = line.matchAll(regiX);
        console.table(match);

        // const furniture = match.groups.furniture;
        // const price = match.groups.price;
        // const quantity = match.groups.quantity;
        // const totalLineSum = price * quantity
        // sum += totalLineSum;
        // allFurniture.push(furniture);
        // TO DO...
        line = array.shift();
    }

    console.log('Bought furniture:');

    for (const furniture of allFurniture) {
        console.log(furniture);
    }

    console.log(`Total money spend: ${sum}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);