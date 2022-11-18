function furniture(array) {

    const regiX = />>\b(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+.?\d*)!(?<quantity>\d+)\b/g;

    let line = array.shift();
    let sum = 0;
    let allFurniture = []

    while (line !== 'Purchase') {

        let match = line.matchAll(regiX);

        for (const el of match) {
            const furniture = el.groups.furniture;
            const price = el.groups.price;
            const quantity = el.groups.quantity;
            const totalLineSum = price * quantity
            sum += totalLineSum;
            allFurniture.push(furniture);
        }

        line = array.shift();
    }

    console.log('Bought furniture:');

    for (const furniture of allFurniture) {
        console.log(furniture);
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

// furniture(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']
// );

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
)