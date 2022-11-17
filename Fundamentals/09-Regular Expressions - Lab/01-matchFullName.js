function matchFullName(text) {

    const regeX = /\b([A-Z]{1}[a-z]+) [A-Z]{1}[a-z]+\b/g;

    const matches = text.match(regeX);

    let allMathces = []

    for (const match of matches) {
        allMathces.push(match);
    }

    console.log(allMathces.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");