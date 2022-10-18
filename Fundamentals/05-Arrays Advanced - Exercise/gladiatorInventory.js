function gladiatorInventory(array) {

    let inventory = array.shift().split(' ');

    while (array.length > 0) {

        let firstRow = array.shift().split(' ');
        let command = firstRow.shift()
        let equipment = firstRow.slice()
        let equipmentAsString = equipment.join()

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipmentAsString)) {
                    inventory.push(equipmentAsString);
                }
                break;

            case 'Trash':
                if (inventory.includes(equipmentAsString)) {
                    let indexOfEquipmentToRemove = inventory.indexOf(equipmentAsString);
                    inventory.splice(indexOfEquipmentToRemove, 1);
                }
                break;

            case 'Repair':
                if (inventory.includes(equipmentAsString)) {
                    let indexOfEquipmentToRepair = inventory.indexOf(equipmentAsString);
                    inventory.splice(indexOfEquipmentToRepair, 1);
                    inventory.push(equipmentAsString)
                }
                break;

            case 'Upgrade':
                let upgradedEquipment = equipmentAsString.split('-');
                let equipmentBeforeTheUpgrade = upgradedEquipment[0]
                
                if (inventory.includes(equipmentBeforeTheUpgrade)) {
                    let index = inventory.indexOf(equipmentBeforeTheUpgrade);
                    inventory.splice(index + 1, 0, upgradedEquipment.join(':'));
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)