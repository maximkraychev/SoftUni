function colorize() {

    let rowsElements = document.querySelectorAll('tr:nth-of-type(2n)');

    for (let row of rowsElements) {
        row.style.backgroundColor = 'Teal';
    }
}