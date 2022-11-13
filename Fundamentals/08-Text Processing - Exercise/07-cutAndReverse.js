function cutAndReverse(text) {

    const firstWord = text
    .substring(0, text.length / 2)
    .split('')
    .reverse()
    .join('');

    const secondWord = text
    .substring(text.length / 2)
    .split('')
    .reverse()
    .join('');

    console.log(firstWord + '\n' + secondWord);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');