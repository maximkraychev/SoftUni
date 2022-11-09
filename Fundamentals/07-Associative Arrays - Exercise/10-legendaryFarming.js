function legendaryFarming(input) {
    input = input.join();

    const arrayOfinput = input.split(' ');

    let objItemWeFarmFor = {
        'shards': 0,
        'fragments': 0,
        'motes': 0,
    }

    const marksForWinNeeded = 250;

    let junkItems = {};

    for (let index = 0; index < arrayOfinput.length; index += 2) {
        const quantity = Number(arrayOfinput[index]);
        const material = arrayOfinput[index + 1].toLowerCase();

        if (objItemWeFarmFor.hasOwnProperty(material)) {
            objItemWeFarmFor[material] += quantity;

        } else if (!junkItems.hasOwnProperty(material)) {
            junkItems[material] = [material, quantity];

        } else if (junkItems.hasOwnProperty(material)) {
            junkItems[material][1] += quantity;
        }

        if (objItemWeFarmFor.shards >= marksForWinNeeded) {
            objItemWeFarmFor.shards -= marksForWinNeeded;
            console.log('Shadowmourne obtained!');
            break;

        } else if (objItemWeFarmFor.fragments >= marksForWinNeeded) {
            objItemWeFarmFor.fragments -= marksForWinNeeded;
            console.log('Valanyr obtained!');
            break;

        } else if (objItemWeFarmFor.motes >= marksForWinNeeded) {
            objItemWeFarmFor.motes -= marksForWinNeeded;
            console.log('Dragonwrath obtained!');
            break;
        }
    }

    const entries = Object.entries(objItemWeFarmFor);
    const sortedEntries = entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (const [material, quantity] of sortedEntries) {
        console.log(material + ': ' + quantity);
    }

    const entriesFromJunk = Object.values(junkItems)
    const sortedJunkItems = entriesFromJunk.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [material, quantity] of sortedJunkItems) {
        console.log(material + ': ' + quantity);
    }
}

//legendaryFarming('3 Motes 5 stones 255 Shards 6 leathers 230 fragments 7 Shards');

legendaryFarming(['123 silver 6 shards 20 silver 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver']);