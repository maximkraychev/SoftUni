function cardGame(input) {

    const peopleWithScore = {};
    const peopleWithCards = {};

    input.forEach(line => {

        let [name, cards] = line.split(': ');
        cards = cards.split(', ')

        if (!peopleWithCards.hasOwnProperty(name)) {
            peopleWithCards[name] = cards;

        } else {
            peopleWithCards[name] = peopleWithCards[name].concat(cards);
        }
    })

    let entriesFrompeopleWithCards = Object.entries(peopleWithCards);

    entriesFrompeopleWithCards.forEach(personAndCards => {
        const [name, cards] = personAndCards;

        let setOfCards = new Set(cards);

        let arrayOfCards = Array.from(setOfCards);

        let arrayWithAllPower = arrayOfCards.map(x => {
            x = x.replace('J', '11');
            x = x.replace('Q', '12');
            x = x.replace('K', '13');
            x = x.replace('A', '14');
            return x;
        })

        let currentPersonSum = 0;

        arrayWithAllPower.forEach(card => {
            let type = '';
            let digit = ''

            for (let index = 0; index < card.length; index++) {

                let currentEl = card[index]

                if (isNaN(currentEl)) {
                    type = card[index];
                } else {
                    digit += card[index];
                }
            }

            if (type === 'S') {
                type = 4
            } else if (type === 'H') {
                type = 3
            } else if (type === 'D') {
                type = 2
            } else if (type === 'C') {
                type = 1
            }

            digit = Number(digit);
            currentPersonSum += type * digit
        })

        if (!peopleWithScore.hasOwnProperty(name)) {
            peopleWithScore[name] = currentPersonSum;
        } else {
            peopleWithScore[name] += currentPersonSum;
        }
    })

    for (let key in peopleWithScore) {
        console.log(`${key}: ${peopleWithScore[key]}`);
    }
}



// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]
// );

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
)