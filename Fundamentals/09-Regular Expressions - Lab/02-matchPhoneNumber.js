function matchPhoneNumber(text) {

    const regeX = /\+359([ -])2\1[0-9]{3}\1[0-9]{4}\b/g;

    const matches = text[0].match(regeX);

    let allMathces = [];

    for (const match of matches) {
        allMathces.push(match);
    }

    console.log(allMathces.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);