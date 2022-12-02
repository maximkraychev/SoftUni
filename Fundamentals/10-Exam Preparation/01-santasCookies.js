function santasCookies(input) {

    const batches = Number(input.shift());
    const singleCookieGrams = 25;
    const cup = 140;
    const smallSpoon = 10;
    const bigSpoon = 20;
    const cookiesPerBox = 5;

    let totalBoxesOfCookies = 0;

    for (let index = 0; index < batches; index++) {
        const flour = Number(input.shift());
        const sugar = Number(input.shift());
        const cocoa = Number(input.shift());

        const flourCups = Math.floor(flour / cup);
        const sugarSpoons = Math.floor(sugar / bigSpoon);
        const cocoaSpoons = Math.floor(cocoa / smallSpoon);

        if (flourCups <= 0 || sugarSpoons <= 0 || cocoaSpoons <= 0) {
            console.log('Ingredients are not enough for a box of cookies.');
            continue;
        }

        const cookies = (cup + smallSpoon + bigSpoon) * Math.min(flourCups, sugarSpoons, cocoaSpoons) / singleCookieGrams;
        const boxOfCookies = Math.floor(cookies / cookiesPerBox);
        totalBoxesOfCookies += boxOfCookies;
        console.log(`Boxes of cookies: ${boxOfCookies}`);
    }

    console.log(`Total boxes: ${totalBoxesOfCookies}`);
}

santasCookies(['2',
    '200',
    '300',
    '500',
    '100',
    '200',
    '50'
])

santasCookies(['1',
    '140',
    '20',
    '10',
])