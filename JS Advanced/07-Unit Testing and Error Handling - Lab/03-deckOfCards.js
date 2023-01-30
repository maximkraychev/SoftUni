function printDeckOfCards(cards) {

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    const arr = [];

    for (const card of cards) {
        let face = '';
        let suit = '';

        if (card.length == 3) {
            face = card[0] + card[1];
            suit = card[2];
        } else if (card.length == 2) {
            [face, suit] = card.split('');
        } else {
            console.log(`Invalid card: ${card}`);
            return;
        }

        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            console.log(`Invalid card: ${card}`);
            return;
        }

        arr.push(`${face}${suits[suit]}`);
    }

    console.log(arr.join(' '));
}


// printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
