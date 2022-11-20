function netherRealms(input) {
    // for Judge >>> 
    input = input.toString();

    // Spliting into array and sorting 
    const regExpForSplit = /[, ]+/g;
    const arrayOfDemons = input
        .split(regExpForSplit)
        .sort((a, b) => a.localeCompare(b));

    const regExpForHealth = /[^\d+\-*/.]/g;
    const regExpForAllNumbers = /[+-]?\d+\.?\d*/g;
    const regExpForMultiplicationAndDivision = /[\*|\/]/g;

    for (let demon of arrayOfDemons) {

        let demonHealthInNumber = Number();
        let dmgInNumber = Number()

        // Take everything from the current element except(0-9+-*/.), take the ASCI value of every element and summ them 
        if (demon.match(regExpForHealth) !== null) {
            const demonHealth = demon.match(regExpForHealth);
            for (const el of demonHealth) {
                demonHealthInNumber += el.charCodeAt()
            }
        }

        // Take all numbers positive and negative and summ them 
        if (demon.match(regExpForAllNumbers) !== null) {
            dmgInNumber = demon.match(regExpForAllNumbers).reduce((a, b) => Number(a) + Number(b));
        }

        // Take all matches of ('*' and '/') and for every match of the corresponding element do the math with number 2 
        if (demon.match(regExpForMultiplicationAndDivision) !== null) {
            const manipulation = demon.match(regExpForMultiplicationAndDivision);
            for (const el of manipulation) {
                switch (el) {
                    case '*': dmgInNumber *= 2; break;
                    case '/': dmgInNumber /= 2; break;
                }
            }
        }
        console.log(`${demon} - ${demonHealthInNumber} health, ${dmgInNumber.toFixed(2)} damage`);
    }
}
netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');