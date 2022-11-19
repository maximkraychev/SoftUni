function starEnigma(input) {

    const numberOfTheMessages = Number(input.shift());

    let attackedPlanets = [];
    let destroyedPlanets = [];

    const decryptingMessageRegExp = /[s]|[t]|[a]|[r]|[S]|[T]|[A]|[R]/g;
    const decryptingValueRegExp = /@(?<name>[A-Za-z]*)[^@\-!:]*:[\d]+[^@\-!:]*!(?<attackType>A|D)![^@\-!:]*->\d+/g;

    for (let index = 0; index < numberOfTheMessages; index++) {
        
        const currentMassage = input[index];
        let decryptKey = currentMassage.match(decryptingMessageRegExp);
        if (decryptKey === null) {
            continue;
        } else {
            decryptKey = decryptKey.length;
        }
        
        const decryptedMessage = currentMassage
            .split('')
            .map(el => String.fromCharCode(el.charCodeAt() - decryptKey))
            .join('');

        const informationFromTheMessage = decryptedMessage.matchAll(decryptingValueRegExp)

        for (const value of informationFromTheMessage) {

            const planetName = value.groups.name;
            if (value.groups.attackType === 'A') {
                attackedPlanets.push(planetName);

            } else if (value.groups.attackType === 'D') {
                destroyedPlanets.push(planetName);
            }
        }
    }

    const sortetAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    const sortetDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sortetAttackedPlanets.length}`);
    sortetAttackedPlanets.forEach(planet => console.log(`-> ${planet}`))
    console.log(`Destroyed planets: ${sortetDestroyedPlanets.length}`);
    sortetDestroyedPlanets.forEach(planet => console.log(`-> ${planet}`))
}

// starEnigma(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']
// );

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
)