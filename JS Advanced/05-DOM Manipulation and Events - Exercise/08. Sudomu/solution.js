function solve() {
    const buttonsElements = document.querySelectorAll('button');
    const tableElement = document.getElementsByTagName('table')[0];
    const bottomTextDiv = document.getElementById('check');
    const bottomParagrapText = bottomTextDiv.querySelector('p');
    const allTableDataElements = document.querySelectorAll('input');

    const quickCheckButtonElement = buttonsElements[0];
    const clearButtonElement = buttonsElements[1];
    let matrixFuild = [];

    quickCheckButtonElement.addEventListener('click', check);
    clearButtonElement.addEventListener('click', clear);

    function check() {
        const arrayWithInputElements = Array.from(allTableDataElements);

        for (let i = 0; i < arrayWithInputElements.length; i += 3) {
            matrixFuild.push([arrayWithInputElements[i].value, arrayWithInputElements[i + 1].value, arrayWithInputElements[i + 2].value]);
        }

        for (let i = 0; i < matrixFuild.length; i++) {
            const rowExamp = ['1', '2', '3'];
            const colExamp = ['1', '2', '3'];

            for (let j = 0; j < matrixFuild.length; j++) {
                const rowDigit = matrixFuild[i][j];
                const colDigit = matrixFuild[j][i];

                if (rowExamp.includes(rowDigit)) {
                    const index = rowExamp.indexOf(rowDigit);
                    rowExamp.splice(index, 1);
                } else {
                    return youHaveFail();
                }

                if (colExamp.includes(colDigit)) {
                    const index = colExamp.indexOf(colDigit);
                    colExamp.splice(index, 1);
                } else {
                    return youHaveFail();
                }
            }
        }

        youSolveIt();
    }

    function youHaveFail() {
        tableElement.style.border = '2px solid red';
        bottomParagrapText.textContent = 'NOP! You are not done yet...';
        bottomParagrapText.style.color = 'red';
    }

    function youSolveIt() {
        tableElement.style.border = '2px solid green';
        bottomParagrapText.textContent = 'You solve it! Congratulations!';
        bottomParagrapText.style.color = 'green';
    }

    function clear() {
        tableElement.style.border = 'none';
        bottomParagrapText.textContent = '';
        matrixFuild = [];

        for(const data of allTableDataElements) {
            data.value = '';
        }
    }
}


