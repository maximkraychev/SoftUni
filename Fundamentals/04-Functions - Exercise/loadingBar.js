function loadingBar(number) {

    let numberOfPercents = number / 10;

    if (numberOfPercents === 10) {
        return console.log('100% Complete!\n[%%%%%%%%%%]');
    }

    let percentOrDot = '';

    for (let i = 0; i < 10; i++) {
        if (i < numberOfPercents) {
            percentOrDot += '%'
        } else {
            percentOrDot += '.'
        }
    }

    console.log(`${number}% [${percentOrDot}]\nStill loading...`);

}

loadingBar(30);
loadingBar(100);
loadingBar(0);