function extractText() {
    let ulElements = document.querySelectorAll('#items li');

    let arr = []

    for (let el of ulElements) {
        arr.push(el.textContent)
    }

    let textAreaElement = document.getElementById('result');
    arr.forEach(x => {
        textAreaElement.textContent += x + '\n';
    })
}

extractText();