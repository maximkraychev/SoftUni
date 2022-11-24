function emojiDetector(input) {

    /*  01. We need to take all the digits from the text and then multiplying them all >> That way we will find the threshold(single digit wich later every emoji need to pass 
            over to be printed on the console);
        02. We need to take all valid emoji from the text(RegExp);
        03. After we have all the emoji we need to find their coolness(summing ASCII values of all letters in the emoji);
        04. Print the threshold and the the number of emoji in the text;
        05. If the coolness is bigger than the threshold print the emoji; */

    const text = input[0];
    const threshold = text.match(/\d/g).reduce((a, b) => Number(a) * Number(b));
    const regExpForFindingAllEmoji = /([:]{2}|[\*]{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/g;

    const emojis = text.matchAll(regExpForFindingAllEmoji);
    let coolEmojis = [];
    let counterEmoji = 0;

    for (const interator of emojis) {

        const emoji = interator.groups.emoji;
        const fullEmoji = interator[0];
        counterEmoji++
        
        let currentCoolness = 0;
        for (const el of emoji) {
            currentCoolness += el.charCodeAt();
        }

        if (currentCoolness >= threshold) {
            coolEmojis.push(fullEmoji);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${counterEmoji} emojis found in the text. The cool ones are:`);

    for (const emoji of coolEmojis) {
        console.log(emoji);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);