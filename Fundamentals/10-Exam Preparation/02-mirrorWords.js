function mirrorWords(input) {

    let text = input[0];
    const regExp = /(\@|#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let matches = text.matchAll(regExp);
    let validPairs = new Map();

    for (const match of matches) {
        const firstWord = match.groups.firstWord;
        const secondWord = match.groups.secondWord;
        validPairs.set(firstWord, secondWord);
    }

    if (validPairs.size > 0) {
        console.log(`${validPairs.size} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    let entries = validPairs.entries();
    let mirrorWords = [];

    for (let [firstWord, secondWord] of entries) {
        let secondWordReversed = secondWord.split('').reverse().join('');

        if (firstWord === secondWordReversed) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
    }

    if (mirrorWords.length > 0) {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    } else {
        console.log('No mirror words!');
    }
}

mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]
);

//mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])