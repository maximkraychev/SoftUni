function inventory(input) {
    let inventory = input.shift().split(', ');

    let currentLine = input.shift();

    while (currentLine !== 'Craft!') {
        let arrayOfCurrentLine = currentLine.split(' - ');
        let [command, item] = arrayOfCurrentLine;

        switch (command) {

            case 'Collect':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;

            case 'Drop':
                if (inventory.includes(item)) {
                    let indexToDrop = inventory.indexOf(item);
                    inventory.splice(indexToDrop, 1);
                }
                break;

            case 'Combine Items':

                item = item.split(':');
                let [oldItem, newItem] = item;

                if (inventory.includes(oldItem)) {
                    let IndexOfTheOldItem = inventory.indexOf(oldItem);
                    inventory.splice(IndexOfTheOldItem + 1, 0, newItem);
                }
                break;

            case 'Renew':
                if (inventory.includes(item)) {
                    let indexOfItemToMove = inventory.indexOf(item);
                    inventory.splice(indexOfItemToMove, 1);
                    inventory.push(item);
                }
                break;
        }

        currentLine = input.shift();
    }

    console.log(inventory.join(', '));
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]  
);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )