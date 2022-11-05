function partyTime(input) {

    const normalGuestList = [];
    const vipGuestList = []

    let currentGuest = input.shift();

    while (currentGuest !== 'PARTY') {
        const isVIP = !isNaN(currentGuest[0]);

        if (isVIP) {
            vipGuestList.push(currentGuest);
        } else {
            normalGuestList.push(currentGuest);
        }

        currentGuest = input.shift();
    }

    const guestList = vipGuestList.concat(normalGuestList);

    const lengthOfTheCommingGuest = input.length;

    for (let index = 0; index < lengthOfTheCommingGuest; index++) {

        const commingGuest = input[index];

        if (guestList.includes(commingGuest)) {
            guestList.splice(guestList.indexOf(commingGuest), 1)
        }
    }

    console.log(guestList.length);

    guestList.forEach(guest => console.log(guest));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)