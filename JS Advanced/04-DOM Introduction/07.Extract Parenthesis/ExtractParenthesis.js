function extract(content) {
    const textElement = document.getElementById(content);
    const text = textElement.innerText;

    const regExp = /\(([^\)]+)\)/g;
    const matchedText = text.matchAll(regExp);

    const resultArray = [];

    for (const el of matchedText) {
        const match = el[1];
        resultArray.push(match);
    };

    const finalString = resultArray.join('; ')

    return finalString;
}